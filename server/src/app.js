import express from "express";

const app = express();

app.use((req,res,next)=>{
    console.log("Middleware executed");
    next();
});

app.get("/", (req,res)=>{
    res.send("Welcome to smartTask API");
});

app.get("/about", (req,res)=>{
    res.send("About SmartTask");
});

app.post("/login", (req,res)=>{
    res.send("Login Successful");
});

app.get("/random", (req,res)=>{
    res.send("Random Page for Task")
})

export default app;