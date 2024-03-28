const express=require("express");
const path=require("path")
const port=8001;
const app=express();
const urlRoute=require("./routes/url");
const staticRouter=require("./routes/staticrouter");
const {connecttomongodb}=require("./connect");
const URL =require("./models/url");
connecttomongodb("mongodb://localhost:27017/short-url").then(()=>console.log("Mongodb Connected"));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/url",urlRoute);
app.use("/",staticRouter);

app.get("/test",async (req,res)=>{
    const allurls=await URL.find({});
    return res.render("home",
    {
        urls:allurls,
    });
});
app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        // Find the corresponding URL document and update visit history
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visithistory: {
                        timestamp: Date.now()
                    }
                }
            }
        );
        // Redirect to the original URL
        if (entry) {
            return res.redirect(entry.redirecturl);
        } else {
            return res.status(404).json({ message: "URL not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port,()=>console.log("Port Succcessfully Created"));
