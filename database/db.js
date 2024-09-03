require('dotenv').config();
const { mongoose } = require("mongoose");

const mongoConnect = async () => {
    await mongoose
        .connect(process.env.DB_URL, {})
        .then(() => {
            console.log('Mongodb Connection ✅');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = mongoConnect;