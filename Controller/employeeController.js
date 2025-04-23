
const Employee =require("../Models/Employee.js")
const User =require("../Models/User.js")
const bcrypt =require("bcrypt")
const multer=require("multer")
const fs=require("fs")
const path=require("path")
const department=require("../Models/Department.js")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload= multer({storage:storage})

const addEmployee=async (req ,res)=>{
    try{

    const {name,email,employeeId,dob,gender,maritalStatus,designation,department,salary,password,role}=req.body;

    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({success:false,error:"user already exist in emp"})
    }
    const hashPassword =await bcrypt.hash(password,10)
    const newUser = new User({
        name,
        email,
        password:hashPassword,
        role,
        profileImage:req.file ? req.file.filename :""
    })
    const savedUser=await newUser.save()

    const newEmployee = new Employee({
        userId:savedUser._id,
        employeeId,
        dob,
        gender,
        maritalStatus,
        designation,
        department,
        salary

    })

    await newEmployee.save()
    return res.status(200).json({success:true,message:"employee created"})
}catch(error){

    return res.status(500).json({success:false,error:"server error in adding employee"})

}

}

const getEmployees =async (req,res)=>{
    try {
        const employees = await Employee.find().populate("userId",{password:0}).populate("department")
        return res.status(200).json({ success: true, employees });
      } catch (error) {
        return res.status(500).json({ success: false, error: "Server error in get employees" });
      }
}

const getEmployee = async (req, res) => {
    const { id } = req.params;
  
    try {
      let employee
       employee = await Employee.findById({_id:id})
        .populate("userId", { password: 0 })
        .populate("department");
  
      if (!employee) {
       employee= await Employee.findOne({userId:id})
        .populate("userId", { password: 0 })
        .populate("department");
      }
  
      return res.status(200).json({ success: true, employee });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Server error in get employee" });
    }
  };
  

const updateEmployee= async (req,res) =>{

    try{
        const {id} =req.params;
        const {name,maritalStatus,designation,department,salary} =req.body

        const employee=await Employee.findById({_id:id})
        if(!employee){
        return res.status(500).json({ success: false, error: " employee not found" });

        }
        const user=await User.findById({_id:employee.userId})
        if(!user){
            return res.status(500).json({ success: false, error: " user not found" });
    
            }

            const updateUser =await User.findByIdAndUpdate({_id:employee.userId},{name})
            const updateEmployee=await Employee.findByIdAndUpdate({_id:id},{
                maritalStatus,designation,salary,department
            })
            if(!updateEmployee || !updateUser){
                return res.status(500).json({ success: false, error: " data not found" });
    
            }
        return res.status(200).json({ success: true, message:"employee updated" });


    }catch(error){
        return res.status(500).json({ success: false, error: "Server error in update employees" });

    }

}

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
      const employee = await Employee.findById(id);
      if (!employee) {
        return res.status(404).json({ success: false, error: "Employee not found" });
      }
  
    
      await User.findByIdAndDelete(employee.userId);
  
    
      await Employee.findByIdAndDelete(id);
  
      return res.status(200).json({ success: true, message: "Employee deleted successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Server error in delete employee" });
    }
  };
  
const fetchEmployeeByDepId=async (req,res)=>{
  const { id } = req.params;
  
  try {
    const employees = await Employee.find({department:id})
    return res.status(200).json({ success: true, employees });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in getemployeeByDepId" });
  }
}


module.exports= {addEmployee,getEmployees,upload,getEmployee,updateEmployee,deleteEmployee,fetchEmployeeByDepId }