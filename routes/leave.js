
// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware.js");
// const {addLeave,getLeave,getLeaves} = require("../Controller/leaveController.js");



// const router = express.Router();

// router.post("/add", authMiddleware, addLeave);
// router.get("/:id", authMiddleware, getLeave);
// router.get("/",authMiddleware,getLeaves)



// module.exports = router;


const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const {
  addLeave,
  getLeave,
  getLeaves,
  getLeaveById,
  updateLeave
} = require("../Controller/leaveController.js");

const router = express.Router();

router.post("/add", authMiddleware, addLeave);
router.get("/detail/:id", authMiddleware, getLeaveById); 
router.get("/:id", authMiddleware, getLeave);
router.get("/", authMiddleware, getLeaves);
router.put("/:id", authMiddleware, updateLeave);


module.exports = router;
