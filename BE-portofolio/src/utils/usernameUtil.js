const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    return usernameRegex.test(username); // Mengembalikan true jika valid, false jika tidak
};

module.exports = { isValidUsername }