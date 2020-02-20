const express = require("express");
const router = express.Router();
const {Register} = require("../controllers/register");
const { login } = require("../controllers/auth");
const { addspecies, species } = require("../controllers/species");
const { auth } = require("../midleware/auth");


router.get('/',  (req, res) => {
    res.send("halo dnia");
});

router.post("/login", login);
router.post("/register", Register );
router.post("/species", addspecies);
router.get("/species", species);


module.exports = router;