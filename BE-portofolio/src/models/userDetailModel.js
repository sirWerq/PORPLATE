const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true,
        index: true
    },
    overview: String,
    socialMedia: {
        instagram: String,
        facebook: String,
        linkedin: String,
        github: String
    }
});

const UserDetails = mongoose.model("UserDetails", userDetailSchema);

module.exports = { UserDetails };