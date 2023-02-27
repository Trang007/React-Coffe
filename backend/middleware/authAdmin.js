const User = require("../models/userModel");
const authAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        //role==0->user,1->admin
        if (user.role == 0)
            return res.status(400).json({ msg: "Acc does not AccAdmin!" });
        return next();
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
module.exports = authAdmin;