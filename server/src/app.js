import express from "express";
import { loginUser } from "../controllers/user.controllers";

const app = express();
app.use(express.json());

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

app.post("/login", loginUser);

app.get("/random", (req,res)=>{
    res.send("Random Page for Task")
})

export default app;