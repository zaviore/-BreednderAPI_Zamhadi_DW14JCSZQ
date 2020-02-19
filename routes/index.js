const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth");
const { auth } = require("../midleware/auth");


router.get('/',  (req, res) => {
    res.send("halo dnia");
});

router.post("/login", login);
module.exports = router;