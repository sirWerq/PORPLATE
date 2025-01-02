const { Users } = require("../models/userModel");
const { UserDetails } = require("../models/userDetailModel");
const { Educations } = require("../models/educationModel");
const { Projects } = require("../models/projectModel");
const { UserSkills } = require("../models/skillsModel");

const loadPortofolio = async (req, res) => {
    try {
        const { username } = req.body
        if (!username) {
            return res.status(409).json({
                error: true,
                message: "Error parameter body"
            })
        }
        const user = Users.findOne({ username: username }, {
            password: 0,
            email: 0
        });
        if (!user) {
            return res.status(409).json({
                error: true,
                message: "User not found"
            })
        };
        userId = user._id;
        const userDetail = UserDetails.findOne({ userId: userId });
        const projects = Projects.findOne({ userId: userId });
        const educations = Educations.findOne({ userId: userId });
        const userSkills = UserSkills.findOne({ userId: userId });
        return res.status(200).json({
            error: false,
            user: user,
            projects: projects,
            userDetail: userDetail,
            educations: educations,
            userSkills: userSkills
        })
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: `An error occured: ${error}`
        })
    }
}

module.exports = { loadPortofolio }