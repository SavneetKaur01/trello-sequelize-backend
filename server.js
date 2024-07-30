const express = require("express");
const cors = require("cors");
const initializeModels = require("./models/initModels.js");
const app = express();

var corsOptions = {
  origin: 'http://localhost:5173',
  credentials:true,            
  optionSuccessStatus:200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Landing Page" });
});

require("./routes/trello.routes.js")(app);

//Global error handling middleware
app.use((err,req,res,next)=>{
  res.status(500).json({
    message:err.message
  });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function startApp() {
  // await testConnection();
  await initializeModels();
}

startApp();

