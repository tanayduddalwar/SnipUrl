const User = require("../models/users");
const { v4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        await User.create({
            name,
            email,
            password, // Save password as plain text
        });
        return res.redirect("/");
    } catch (error) {
        console.error('Error during user signup:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    try {
        console.log(`Attempting to login with email: ${email} and password: ${password}`);

        // Check if the user exists in the database with plain text password
        const user = await User.findOne({ email, password });
        console.log(`User found: ${user}`);

        if (!user) {
            console.log("Invalid Username or Password");
            return res.render("login", {
                error: "Invalid Username or Password",
            });
        }

        console.log("User authenticated successfully:", user);
        const sessionid = v4();
        setUser(sessionid, user);
        res.cookie("uid", sessionid);
        return res.redirect("/");
    } catch (error) {
        console.error('Error during user login:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};
