const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models/userModel");
const { isValidUsername } = require("../utils/usernameUtil")

const Register = async (req, res) => {
    const { name, username, password, email } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    if (!username & isValidUsername(username)) {
        return res.status(400).json({
            error: "Invalid username. Username must start with a letter, can only contain letters, numbers, underscores, and dashes, and must not contain spaces.",
        });
    }

    try {
        const dataExist = await Users.findOne({
            $or: [{ username: username }, { email: email }]
        });

        if (dataExist) {
            return res.status(409).json({
                error: true,
                message: dataExist.username === username ?
                    "Username already existed!" : "Email already existed"
            })
        }

        const newUser = new Users({
            name: name,
            username: username,
            email: email,
            password: hashPassword
        })

        await newUser.save();
        return res.status(201).json({
            error: false,
            message: 'Register Successfull'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: true,
            message: 'Register failed'
        });
    }
};

const Login = async (req, res) => {
    try {
        const getUserData = await Users.findOne({
            email: { $regex: new RegExp(req.body.email, "i") }
        });

        if (!getUserData) {
            return res.status(404).json({
                error: true,
                message: "Wrong email or password"
            })
        }
        const passMatching = await bcrypt.compare(req.body.password, getUserData.password);

        if (!passMatching) {
            return res.status(401).json({
                error: true,
                message: "Wrong email or password"
            })
        }

        const { _id, username, email } = getUserData;
        const accessToken = jwt.sign({ userId: _id }, process.env.ACCESS_SECRET_TOKEN, {
            expiresIn: '1m'
        });

        return res.writeHead(200, {
            "Set-Cookie": `jwt=${accessToken}; HttpOnly`,
            "Access-Allow-Credentials": "true"
        }).send();
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Login failed"
        })
    }
};

const CheckAuth = async (req, res) => {
    const { user } = await Users.findById(req.userId);

    return res.status(200).json({
        error: false,
        message: 'Auth success',
        data: {
            userId: req.userId,
            username: user.username,
            email: user.email,
            name: user.name,
            image: user.image
        }
    })
};

module.exports = { Register, Login, CheckAuth };