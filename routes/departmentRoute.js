// const express=require("express")
// const authMiddleware=require('../middleware/authMiddleware.js')
// const {addDepartment,getDepartments,getDepartment,updateDepartment,deleteDepartment} = require("../Controller/departmentController.js")



// const router = express.Router()

// router.get("/",authMiddleware,getDepartments)
// router.post("/add",authMiddleware,addDepartment)
// router.get("/:id",authMiddleware,getDepartment)
// router.put("/:id",authMiddleware,updateDepartment)
// router.delete("/:id",authMiddleware,deleteDepartment)





// module.exports=router

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const {
  addDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../Controller/departmentController.js");

const router = express.Router();

router.get("/", authMiddleware, getDepartments);
router.post("/add", authMiddleware, addDepartment);
router.get("/:id", authMiddleware, getDepartment);
router.put("/:id", authMiddleware, updateDepartment);
router.delete("/:id", authMiddleware, deleteDepartment);

module.exports = router;
