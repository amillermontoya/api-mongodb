const express = require("express")
const router = express.Router()
const userShema = require("../models/user")

//create user
router.post("/users", (req, res)=> {
    const user = userShema(req.body)
    user.save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}))
})
//get all  user
router.get("/users", (req, res)=> {
    userShema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}))
})
//get all  user
router.get("/users/:id", (req, res)=> {
    const {id} = req.params
    userShema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}))
})

//put all  user
router.put("/users/:id", (req, res)=> {
    const {id} = req.params
    const {name,age,email} = req.body
    userShema
        .updateOne({_id:id},{$set:{name,age,email}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}))
})

//delete  user
router.delete("/users/:id", (req, res)=> {
    const {id} = req.params
    userShema
        .deleteOne({ _id:id })
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}))
})
module.exports = router