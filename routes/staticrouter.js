const express=require("express");
const URL=require("../models/url");
const router = express.Router();
router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    const allurls = await URL.find({ createdBy: req.user._Id });
    return res.render("home", {
      urls: allurls,
    });
  })
router.get("/signup",(req,res)=>{
    return res.render("Signup");
});
router.get("/login",(req,res)=>{
    return res.render("login");
})
module.exports=router;