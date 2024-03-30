const User=require("../models/users")
const { v4 }=require("uuid");
const {setUser,getuser}=require("../service/auth.js");
async function handleUserSignup(req,res){
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}
async function handleUserLogin(req,res){
    const{email,password}=req.body;
    const user=await User.findOne({ 
        email,
        password,
    });
    if(!user){
        return res.render("login",{
            error:"Invalid Username or Password",
        });
    }
    const sessionid=v4();
    setUser(sessionid,user);
    res.cookie("uid",sessionid);
    return res.redirect("/");
}

module.exports={
    handleUserSignup,
    handleUserLogin,
};