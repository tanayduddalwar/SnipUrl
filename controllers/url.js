const shortid= require("shortid");
const URL=require("../models/url");
async function handleGenerateNewShortUrl(req,res){
    const shortID=shortid();

    const body=req.body;
    if(!body.url){
        return res.status(400).json({
            msg:"Url is required"
        })
    }
    await URL.create({
        shortId: shortID, // Use shortID, not shortid
        redirecturl: body.url,
        visithistory: []
    });
    
    return res.render("home",{
        id:shortID,
    });
}

async function getanalysis(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({
        shortId
    });
    return res.json({totalClicks:result.visithistory.length,analytics:result.visithistory});
}
module.exports={
    getanalysis,
    handleGenerateNewShortUrl
}