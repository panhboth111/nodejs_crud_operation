const router = require("express").Router();

router.post("/signin", (req, res) => {
  return res.json("Signed in successfully");
});

module.exports = router;
