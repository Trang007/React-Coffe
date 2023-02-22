const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userCtrl = {
    register: async (req, res) => {
        try {
            const { name, password } = req.body;
            const user = await User.findOne({ name });
            if (user)
                return res.status(400).json({ msg: "Ten dang nhap da ton tai" });
            if (password.lenght < 6)
                return res.status(400).json({ msg: "Mat khau phai lon hon 6 ky tu" });
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = await User({ name, password: passwordHash });
            await newUser.save();
            // res.json({newUser})
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async (req, res) => {
        try {
            res.json("This userCtrl")
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.json("This userCtrl")
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUser: async (req, res) => {
        try {
            res.json("This userCtrl")
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
};

module.exports = userCtrl;