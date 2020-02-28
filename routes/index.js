const express = require("express");
const router = express.Router();
const { Register } = require("../controllers/register");
const { login } = require("../controllers/auth");
const {
  addpet,
  petindex,
  petDestroy,
  petUpdate,
  petDetail
} = require("../controllers/pet");
const { addPayment, updatePayment } = require("../controllers/payment");
const { userDetail, userUpdate, userDestroy } = require("../controllers/user");
const { addspecies, species } = require("../controllers/species");
const { matchAdd, matchCheck, updateMatch } = require("../controllers/match");
const { auth } = require("../midleware/auth");
// -----------------------------------------------routes------------------------------------------------------------

router.get("/", (req, res) => {
  res.send("halo dnia");
});

router.post("/login", login);
router.post("/register", Register);
// ------------------species--------------------
router.post("/species", addspecies);
router.get("/species", species);
// -------------------pet------------------------
router.post("/pet", auth, addpet);
router.get("/pets", petindex);
router.delete("/pet/:id", auth, petDestroy);
router.put("/pet/:id", auth, petUpdate);
router.get("/pet/:id", petDetail);
// -------------------user-----------------------
router.get("/user/:id", userDetail);
router.put("/user/:id", auth, userUpdate);
router.delete("/user/:id", auth, userDestroy);
// -----------------match--------------------
router.post("/match", auth, matchAdd);
router.get("/match/:id", matchCheck);
router.put("/match/:id", updateMatch);

router.post("/payment", auth, addPayment);
router.put("/payment/:id", auth, updatePayment);

module.exports = router;
