import Foodmodel from "../models/Foodmodel.js";
import fs from 'fs';

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`

    const food=new Foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error){
        res.json({success:false,message:"Error"})
    }
}
    const listfood=async(req,res)=>{
        try{
            const foods=await Foodmodel.find({});
            res.json({success:true,data:foods})
        } catch(error){
            console.log(error);
            res.json({success:false,message:"error"})
        }
    }
    const removeFood=async(req,res)=>{
        try{
            const food = await Foodmodel.findById(req.body.id);
            fs.unlink(`uploads/${food.image}`,()=>{})
            await Foodmodel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food Removed"})
        }catch(error){
            console.log(error);
            res.json({success:false,message:"error"})
        }
    }


export {addFood,listfood,removeFood}