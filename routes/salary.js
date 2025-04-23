
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const {addSalary,getSalary} = require("../Controller/salaryController.js");


const router = express.Router();

router.post("/add", authMiddleware, addSalary);
router.get("/:id", authMiddleware, getSalary);



module.exports = router;
