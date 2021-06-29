const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// app.use(express.urlencoded({extended: false}))

// app.get("/app", (req, res) => {
//   return res.send(Data.data);
// });
// app.post("/add", (req, res) => {
//   Data.data.push(req.body);
//   res.json(Data.data);
// });

// app.delete("/del", (req, res) => {
//   for (var i = 0; i < Data.data.length; i++) {
//     if (Data.data[i].fruit == req.body.fruit) {
//       Data.data.splice(i, 1);
//       break;
//     }
//   }
//   res.json(Data.data);
// });

// app.patch("/update", (req, res) => {
//   for (var i = 0; i < Data.data.length; i++) {
//     if (Data.data[i].id == req.body.id) {
//       Data.data[i].fruit = req.body.fruit;
//     }
//     res.json(Data.data);
//   }
// });

app.listen(port, () => {
  console.log("listen to port 3000");
});
