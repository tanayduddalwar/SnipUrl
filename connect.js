const mongoose = require("mongoose");

async function connecttomongodb(url) {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {
    connecttomongodb,
};
