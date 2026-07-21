import express from "express";

const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to smartTask API");
});

app.get("/about", (req,res)=>{
    res.send("About SmartTask");
});

export default app;