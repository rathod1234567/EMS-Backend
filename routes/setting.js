
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const changePassword=require("../Controller/settingController.js")



const router = express.Router();

router.put("/change-password", authMiddleware, changePassword);




module.exports = router;
