import app from "./app.js";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT || 5000;

console.log(process.env.JWT_SECRET);
console.log(process.env.ABC);


app.listen(PORT, () =>{
console.log(`Server is running on port ${PORT}`);
});