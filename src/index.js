const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRouter = require("./routers/user")

const app = express()
const port = process.env.PORT || 9000

//middleware
app.use(express.json())
app.use("/api",userRouter)

//routes
app.get("/", (req,res)=> {
    res.send("Bienvenido a mi API")
})

//mongo conexion
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.error(error))

app.listen(port, () => console.log("server listening on port",port))