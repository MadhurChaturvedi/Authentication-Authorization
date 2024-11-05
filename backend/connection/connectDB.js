const mongoose = require('mongoose');

const DB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.DB}`)
        console.log("db connected👾");

    } catch (error) {
        console.log(error);
    }
}

module.exports = DB