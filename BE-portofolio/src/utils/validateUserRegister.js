const validateFields = (fields, body) => {
    // Iterasi setiap field untuk memastikan tidak undefined atau kosong
    for (const field of fields) {
        if (!body[field]) {
            return { isValid: false, missingField: field };
        }
    }
    return { isValid: true };
};

module.exports = { validateFields }