const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // const headers = req.headers["authorization"];
    // // console.log(headers);
    // const token = headers.split(" ")[1];
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1]
    if (!token) {
        return res.status(404).json({ message: "No token found!" })
    }

    jwt.verify(String(token), process.env.Secrete, (error, user) => {
        if (error) {
            return res.status(400).json({ message: "Invalid token!" })
        }
        // console.log(user);
        req.id = user.id;
    });
    next();

};

module.exports = verifyToken