import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://srisharanprakashsuriya:MqeidYW7VF0eIgIL@cluster0.8zdwuh9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}