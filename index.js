
const express = require("express");
const cors = require("cors");
const connection = require("./Database/db.js");
const userRegister = require("./Register.js");
const authRouter = require("./routes/auth.js");
const departmentRouter =require("./routes/departmentRoute.js")
const employeeRouter = require("./routes/employee.js")
const salaryRouter =require("./routes/salary.js")
const leaveRouter =require("./routes/leave.js")
const settingRouter=require("./routes/setting.js")
const dashboardRouter =require("./routes/dashboard.js")

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB and create admin user
connection();
userRegister();

app.use("/api/auth", authRouter);
app.use("/api/department",departmentRouter)
app.use( express.static('public/uploads'));

app.use("/api/add_employee", employeeRouter);
app.use("/api/salary",salaryRouter)
app.use("/api/leave",leaveRouter)
app.use("/api/setting",settingRouter)

app.use("/api/leaves",leaveRouter)
app.use("/api/dashboard", dashboardRouter);



app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`);
});
