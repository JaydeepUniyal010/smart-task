import User from "../models/user.model.js";

const registerUser = async (req, res) =>{
 const {name, email, phone, password} = req.body;
 console.log(name, email, phone, password);
};

export { registerUser};




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