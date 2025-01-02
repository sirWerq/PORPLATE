const { validateFields } = require("../utils/validateUserRegister")

const validateRequestBodyUserRegister = (req, res, next) => {
    const requiredFields = ["name", "username", "password", "email"];

    const { isValid, missingField } = validateFields(requiredFields, req.body);

    if (!isValid) {
        return res.status(400).json({
            error: `Missing required field: ${missingField}`,
        });
    }
    next();
};

module.exports = { validateRequestBodyUserRegister }