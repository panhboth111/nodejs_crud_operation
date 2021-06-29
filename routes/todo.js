const router = require("express").Router();

const Data = {
  data: [
    { id: 1, fruit: "apple", color: "red" },
    { id: 2, fruit: "banana", color: "yellow" },
  ],
};

router.get("/", (req, res) => {
  return res.send(Data.data);
});
router.post("/add", (req, res) => {
  Data.data.push(req.body);
  res.json(Data.data);
});

router.delete("/del", (req, res) => {
  for (var i = 0; i < Data.data.length; i++) {
    if (Data.data[i].fruit == req.body.fruit) {
      Data.data.splice(i, 1);
      break;
    }
  }
  res.json(Data.data);
});

router.patch("/update", (req, res) => {
  for (var i = 0; i < Data.data.length; i++) {
    if (Data.data[i].id == req.body.id) {
      Data.data[i].fruit = req.body.fruit;
    }
    res.json(Data.data);
  }
});

module.exports = router;
