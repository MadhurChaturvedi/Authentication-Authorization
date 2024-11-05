const User = require('../model/User.js');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.SignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log(name, email, password);

        let existingUser;
        try {
            existingUser = await User.findOne({ email });
        } catch (error) {
            console.log(error);
        }

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        // creating new user 
        const user = new User({
            name,
            email,
            password: hashPassword
        });
        await user.save();
        return res.status(201).json({ message: `account created by this ${email} email` })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Error something went wrong` })
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log(error);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "User does not exist😑" });
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
    )
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" })
    }

    const JwtSecrete = process.env.Secrete
    const token = jwt.sign({ id: existingUser._id }, JwtSecrete, {
        expiresIn: "15s",
    })

    res.cookie(String(existingUser.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: "lax"
    });

    return res.status(200).json({ message: "Successfully logged in", token })
};
