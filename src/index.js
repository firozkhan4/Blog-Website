require("dotenv").config();
const express = require("express");
const path = require("path");
// Routes
const viewRoutes = require("./routers/viewRouter");

const app = express();

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use viewRouter for routing
app.use("/", viewRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at PORT:${process.env.PORT || 3000}`);
});
