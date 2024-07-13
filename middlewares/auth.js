const { getuser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const useruid = req.cookies?.uid;
    if (!useruid) {
        console.log('No UID cookie found');
        return res.redirect("/login");
    }
    try {
        const user = await getuser(useruid);
        if (!user) {
            console.log('No user found, redirecting to login');
            return res.redirect("/login");
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in restrictToLoggedinUserOnly middleware:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function checkAuth(req, res, next) {
    const useruid = req.cookies?.uid;
    try {
        const user = await getuser(useruid);
        if (user) {
            console.log('User authenticated:', user);
        } else {
            console.log('User not authenticated');
        }
        req.user = user;
    } catch (error) {
        console.error('Error in checkAuth middleware:', error);
    }
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};
