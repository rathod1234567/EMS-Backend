
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "EmployeeManagementSystem" 
      });
      
    console.log("MongoDB connected successful");
  } catch (error) {
    console.log(" database connection error:", error);
  }
};

module.exports = connection;
