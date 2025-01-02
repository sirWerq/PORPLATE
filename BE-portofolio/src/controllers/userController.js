const bcrypt = require("bcrypt");
const { Users } = require("../models/userModel");
const { UserDetails } = require("../models/userDetailModel");

const getUserById = async (req, res) => {
    const userId = req.userId;
    try {
        const user = await Users.findOne({ _id: userId }, {
            _id: 0,
            password: 0
        });
        if (!user) {
            return res.status(404).json({
                error: true,
                message: 'User tidak ditemukan!'
            })
        }
        const userDetail = await UserDetails.findOne({ userId: userId }, {
            overview: 0
        });
        return res.status(200).json({
            error: false,
            message: 'User details berhasil didapatkan',
            user,
            userDetail
        })
    } catch (error) {
        return res.status(404).json({
            error: true,
            message: `An Error occured: ${error}`
        })
    }
}