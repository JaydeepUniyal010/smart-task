import User from "../models/user.model.js";

export const loginUser = (req,res) =>{
    res.send("Login from Controller");
};




// await User.create({
//     name,
//     email,
//     phone,
//     password
// });

// Controller ka kaam:

// Data lena
// Validation karna
// Business logic chalana
// Response bhejna