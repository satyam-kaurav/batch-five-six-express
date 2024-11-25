require("dotenv").config(); // it enables aur node to access .env file
const express = require("express");

const app = express();

app.use(express.json()); //app.use middleware

app.use((req, res, next) => {
  req.body.status = false;
  next();
});

app.post("/handler", (req, res) => {
  console.log("body:", req.body);

  res.status(200).json({ msg: "We have recieved the body" });
});

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
);
