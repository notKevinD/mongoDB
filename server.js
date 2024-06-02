const express = require("express");
const router = require("./routes/routes");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/mahasiswa").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Failed to connect to MongoDB: ", err);
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
