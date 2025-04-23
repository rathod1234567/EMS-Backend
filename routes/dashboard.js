const express=require("express")
const authMiddleware = require("../middleware/authMiddleware.js");
const getSummary=require("../Controller/dashboardController.js")


const router=express.Router()

router.get('/summary',authMiddleware,getSummary)


module.exports=router