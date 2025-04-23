const bcrypt = require("bcrypt");
const User = require("./Models/User.js");

const userRegister = async () => {
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });
        await newUser.save();
        console.log("Admin user created");
    } catch (error) {
        console.log("User registration error:", error);
    }
};

module.exports = userRegister;
