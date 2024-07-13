import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

const app=express()
const port=4000

app.use(express.json())
app.use(cors())


connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://srisharanprakashsuriya:MqeidYW7VF0eIgIL@cluster0.8zdwuh9.mongodb.net/?