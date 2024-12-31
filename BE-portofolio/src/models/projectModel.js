const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    linkProject: {
        type: String,
        required: true
    },
    mediaLinks: {
        type: [String],
        required: true
    },
    projectOverview: String,
    toolsUsed: [String]
});

const Projects = mongoose.model("Projects", projectSchema);

module.exports = { Projects };