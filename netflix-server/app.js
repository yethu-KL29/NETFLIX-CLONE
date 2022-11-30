const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRouter = require("./routers/userRoute")


dotenv.config()

const app=express();
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB connected"))
.then(app.listen(5000,()=>console.log("server running on port 5000")))
.catch((err)=>console.log(err))
