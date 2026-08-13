import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "../db/index.js";

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
// import app from "./app.js";
// import dotenv from "dotenv";
// import connectDB from "../db/index.js";

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// //console.log(process.env.JWT_SECRET);
// //console.log(process.env.ABC);


// // app.listen(PORT, () =>{
// // console.log(`Server is running on port ${PORT}`);
// // });

// connectDB()
//     .then(() => {
//         //app.listen(PORT);
        
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Database connection failed:", error);
//     });