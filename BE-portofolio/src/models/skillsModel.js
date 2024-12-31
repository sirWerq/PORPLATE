const mongoose = require("mongoose");

// ********************************** INITIATE SCHEMA
const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    darkColor: {
        type: String
    },
    lightColor: {
        type: String
    },
    pathName: {
        type: String,
        required: true,
        get: x => `${bucket_asset}/${x}`
    }
});


const userSkillSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
        index: true
    },
    frameworks: [skillSchema],
    libraries: [skillSchema],
    languages: [skillSchema],
    ecosystems: [skillSchema]
})

// ****************************** SKILLS MODEL INITIATE
const Skills = mongoose.model("SkillSchema", skillSchema);
const UserSkills = mongoose.model("UserSkills", userSkillSchema);

// const LIST_SKILLS = [
//     {
//         name: "Vite",
//         lightColor: "rgb()",
//         darkColor: "rgb()",
//         pathName: "Vite.svg"
//     }
// ]

// ******************************** SEED FOR SKILL ASSET
const seedSkills = async () => {
    try {
        for (const skill of LIST_SKILLS) {
            await Skills.findOneAndUpdate(
                { name: skill.name },
                skill,
                { upsert: true, new: true }
            )
        }
        console.log('Seed data for skill added successfully.');
    } catch (error) {
        console.error("Error seed skills: ", error)
    }
}

module.exports = { Skills, UserSkills, seedSkills };