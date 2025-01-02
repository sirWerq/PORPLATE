const router = require('express').Router();
const authToken = require('../middleware/authToken');
const {
    Register,
    Login,
    CheckAuth
} = require("../controllers/authController");
const { validateRequestBodyUserRegister } = require("../hadler/registerValidation")

const { verifyToken } = require("../middleware/authToken")

const { loadPortofolio } = require("../controllers/portofolioController");

// ******************** ADMIN PANEL
router.post("/register", validateRequestBodyUserRegister, Register);
router.post("/login", Login);

router.get("/check-auth", verifyToken, CheckAuth);

module.exports = router;
