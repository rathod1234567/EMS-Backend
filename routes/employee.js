

// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware.js");
// const {addEmployee,getEmployees} = require("../Controller/employeeController.js");
// const upload = require("../middleware/multerConfig.js");


// const router = express.Router();

// router.get("/", authMiddleware, getEmployees);
// router.post("/add", authMiddleware,upload.single("image"), addEmployee);
// // router.get("/:id", authMiddleware, getDepartment);
// // router.put("/:id", authMiddleware, updateDepartment);
// // router.delete("/:id", authMiddleware, deleteDepartment);

// module.exports = router;

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const {addEmployee,upload,getEmployees,getEmployee,updateEmployee,deleteEmployee,fetchEmployeeByDepId } = require("../Controller/employeeController.js");
// const upload = require("../middleware/multerConfig.js");


const router = express.Router();

router.get("/", authMiddleware, getEmployees);
router.post("/add",authMiddleware,upload.single("image"),addEmployee)

router.get("/:id", authMiddleware, getEmployee);
router.put("/:id", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);
router.get("/department/:id", authMiddleware, fetchEmployeeByDepId);


module.exports = router;
