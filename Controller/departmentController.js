// const Department = require("../Models/Department")

// const getDepartments=async (req,res)=>{
//     try{
//         const departments=await Department.find()
//         return res.status(200).json({success:true,departments})
//     }catch(error){
//         return res.status(500).json({success :false,error:"server error in get department"})

//     }
// }

// const addDepartment= async (req,res)=>{
//     try{
//         const {department_name,description}=req.body
//         const newDep= new Department({
//             department_name,
//             description
//         })
//         await newDep.save()
//         return res.status(200).json({success:true,department:newDep})

//     }catch(error){
//         return res.status(500).json({success :false,error:"server error in add department"})
//     }

// }
// const getDepartment=async (req,res)=>{
//     try{
//         const {id} =req.params;
//         const department = await Department.findById({_id:id})
//         return res.status(200).json({success:true,department})
//     }catch(error){
//         return res.status(500).json({success :false,error:"server error in get department"})
//     }
//  }

//  const updateDepartment=async (req,res)=>{
//     try{
//         const {department_name,description} =req.body
//         const {id} =req.params;
//         const updateDep= await Department.findByIdAndUpdate({_id:id},{
//             department_name,
//             description
//         })
//         return res.status(200).json({success:true,updateDep})
//     }catch(error){
//         return res.status(500).json({success:false,error:"edit department server error"})
//     }

//  }

//  const deleteDepartment= async (req,res)=>{
//     const confirm =window.confirm("Do ")
//     try{
//         const {id} =req.params;
//         const deleteDep= await Department.findByIdAndDelete({_id:id})
//         return res.status(200).json({success:true,deleteDep})
//     }catch(error){
//         return res.status(500).json({success:false,error:"delete department server error"})
//     }

//  }
// module.exports={addDepartment, getDepartments ,getDepartment,updateDepartment,deleteDepartment}


const Department = require("../Models/Department");

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in get department" });
  }
};

const addDepartment = async (req, res) => {
  try {
    const { department_name, description } = req.body;
    const newDep = new Department({
      department_name,
      description,
    });
    await newDep.save();
    return res.status(200).json({ success: true, department: newDep });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in add department" });
  }
};

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    return res.status(200).json({ success: true, department });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in get department" });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { department_name, description } = req.body;
    const { id } = req.params;
    const updateDep = await Department.findByIdAndUpdate(
      id,
      { department_name, description },
      { new: true }
    );
    return res.status(200).json({ success: true, updateDep });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Edit department server error" });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDep = await Department.findById(id);
    await deleteDep.deleteOne()

    return res.status(200).json({ success: true, deleteDep });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Delete department server error" });
  }
};

module.exports = {
  addDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
