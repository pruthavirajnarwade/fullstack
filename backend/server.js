const express = require("express");

const userRoutes = require("./routes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});