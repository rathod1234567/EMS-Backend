

// const express =require("express")

// const router=express.Router()
// const login = require("../Controller/authController.js")


// router.post("/login",login)


// module.exports=router;


// const express = require("express");

// const login = require("../Controller/authController.js");
// // const verify =require("../Controller/authController.js")
// const authMiddleware=require("../middleware/authMiddleware.js");
// const verify  = require("jsonwebtoken");

// const router = express.Router();
// router.post("/login", login);
// router.post("/verify", authMiddleware , verify);



// module.exports = router;


const express = require("express");
const { login, verify } = require("../Controller/authController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/login", login);
router.get("/verify", authMiddleware, verify);

module.exports = router;

