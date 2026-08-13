import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected")
    } catch (error) {
        console.log(error);
    }    
};

// export default connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Database connected");

//         // Internal flow

//             // .env
//             //  ↓
//             // MONGODB_URI
//             //  ↓
//             // process.env.MONGODB_URI
//             //  ↓
//             // mongoose.connect()
//             //  ↓
//             // MongoDB


// };

 export default connectDB;


 //Internally:

// App Starts
//       │
//       ▼
// Read .env
//       │
//       ▼
// Get URI
//       │
//       ▼
// Mongoose
//       │
//       ▼
// Open Network Connection
//       │
//       ▼
// Authenticate User
//       │
//       ▼
// Connected ✅