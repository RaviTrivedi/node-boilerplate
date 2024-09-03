const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["recruiter", "applicant"],
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const UserModel = model('User', userSchema);
module.exports = UserModel;
