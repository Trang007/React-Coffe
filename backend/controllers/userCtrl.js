const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userCtrl = {
    register: async (req, res) => {
        try {
            const { email, password, name } = req.body;
            const user = await User.findOne({ email });
            if (user)
                return res.status(400).json({ msg: "Email da ton tai" });
            if (password.length < 6)
                return res.status(400).json({ msg: "Mat khau phai lon hon 6 ky tu" });
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = await User({ email, password: passwordHash, name });
            await newUser.save();
            // res.json({newUser});
            res.json({ msg: "Register complete!" });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    accessToken: (req, res) => {
        try {
            const acc_token = req.cookies.accesstoken;
            //Chưa đăng nhập
            if (!acc_token)
                return res.status(400).json({ msg: "Chua dang nhap!" }); //Trả về thông báo chưa đăng nhập
            jwt.verify(acc_token, process.env.ACCESS, (err, user) => {
                if (err)
                    return res.status(400).json({ msg: "Chua dang nhap!" });
                const accesstoken = createAccessToken({ id: user._id });
                res.json({ accesstoken });
            });
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user)
                return res.status(400).json({ msg: "User does not exists" });
            const isWatch = await bcrypt.compare(password, user.password);
            if (!isWatch)
                return res.status(400).json({ msg: "incorrect password" });
            // const refreshtoken = createRefreshToken({ id: user._id });
            const accesstoken = createAccessToken({ id: user._id });
            res.cookie("accesstoken", accesstoken, {
                httpOnly: true,
                path: "/user/accesstoken",
            });
            res.json({ accesstoken });
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("accesstoken", { path: "/user/accesstoken" });
            return res.status(400).json({ msg: "Logout" });
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select("-password");
            if (!user)
                return res.status(400).json({ msg: "User does not exists" });
            res.json({ user });
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
};
const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS, { expiresIn: "1d" });
};
// const createRefreshToken = (user) => {
//     return jwt.sign(user, process.env.REFRESH, { expiresIn: "1d" });
// };
module.exports = userCtrl;