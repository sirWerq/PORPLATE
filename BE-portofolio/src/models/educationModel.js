const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
        index: true
    },
    school: String,
    startDate: Date,
    endDate: mongoose.Schema.Types.Mixed,
    overview: String,
    dotPoint: [String]
});

const Educations = mongoose.model("Educations", educationSchema);

module.exports = { Educations };