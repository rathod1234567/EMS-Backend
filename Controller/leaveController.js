
const Leave = require("../Models/Leave.js");
const Employee = require("../Models/Employee.js");

const addLeave = async (req, res) => {
  try {
    const { userId, leaveType, startDate, endDate, reason } = req.body;
    const employee = await Employee.findOne({ userId });

    const newLeave = new Leave({
      employeeId: employee._id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    await newLeave.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: "leave add server error" });
  }
};

const getLeave = async (req, res) => {
  try {
    const { id } = req.params;
    let leaves =await Leave.find({employeeId :id})
    if(!leaves || leaves.length ===0){
    const employee = await Employee.findOne({ userId: id });
    
     leaves = await Leave.find({ employeeId: employee._id });


    }
    
    return res.status(200).json({ success: true, leaves });
  } catch (error) {
    return res.status(500).json({ success: false, error: "leave add server error" });
  }
};

const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate({
      path: "employeeId",
      populate: [
        {
          path: "department",
          select: "department_name",
        },
        {
          path: "userId",
          select: "name profileImage",
        },
      ],
    });

    return res.status(200).json({ success: true, leaves });
  } catch (error) {
    return res.status(500).json({ success: false, error: "leave add server error" });
  }
};

const getLeaveById = async (req, res) => {
  try {
    const { id } = req.params;

    const leave = await Leave.findById(id).populate({
      path: "employeeId",
      populate: [
        { path: "userId", select: "name profileImage" },
        { path: "department", select: "department_name" },
      ],
    });

    if (!leave) {
      return res.status(404).json({ success: false, error: "Leave not found" });
    }

    return res.status(200).json({ success: true, leave });
  } catch (error) {
    return res.status(500).json({ success: false, error: "leave getbyid Server error" });
  }
};

const updateLeave =async (req,res)=>{
    try{
        const {id} =req.params
        const leave =await Leave.findByIdAndUpdate({_id:id},{status :req.body.status})
        if(!leave){
           return res.status(404).json({ success: false, error: "Leave not Found" });


        }
        return res.status(200).json({success:true})

    }catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
}

module.exports = { addLeave, getLeave, getLeaves, getLeaveById ,updateLeave};
