import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://apple:root@cluster0.xy471d1.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

