const jwt = require("jsonwebtoken");
const models = require("../models");
const species = models.species;
// ========================species=============================
exports.addspecies = async (req, res) => {
  const { nama_species } = req.body;
  try {
    const check = await species.findOne({ where: { nama_species } });
    if (check) {
      res.status(401).send({ status: false, message: "invalid register" });
    } else {
      const spec = await species.create({ nama_species });
      res.status(200).send({
        message: "Register success",
        data: { id: spec.id, nama_species }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.species = async (req, res) => {
  try {
    const data = await species.findAll({});
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
