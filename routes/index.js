var express = require("express");
var router = express.Router();

// messages array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

router.post("/new", (req, res) => {
  const text = req.body.message;
  const user = req.body.author;
  const added = new Date();

  messages.push({ text, user, added });
  res.redirect("/");
});

module.exports = router;
