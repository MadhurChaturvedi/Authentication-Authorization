const User = require('../model/User.js');

exports.getUser = async (req, res) => {
    const userID = req.id;
    let user;
    try {
        user = await User.findById(userID, "-password");
    }
    catch (e) {
        console.log(e);
    }
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    return res.status(200).json({ message: user })

}