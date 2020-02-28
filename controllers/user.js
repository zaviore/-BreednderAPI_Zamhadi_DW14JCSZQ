const jwt = require("jsonwebtoken");
const models = require("../models");
const user = models.user;
// const pet = models.pet;
// const species = models.species;

exports.userDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const datas = await user.findOne({
      where: {
        id
      },
      attributes: ["breeder", "email", "phone", "createdAt", "updatedAt"]
    });
    res.status(200).send({ datas });
  } catch (err) {
    console.log(err);
  }
};

exports.userUpdate = async (req, res) => {
  const { id } = req.params;
  const { breeder, address, phone } = req.body;
  const id_user = req.user;
  console.log(id_user);
  try {
    if (id == id_user) {
      const update = await user.update(
        { breeder, address, phone },
        { where: { id } }
      );

      const data = await user.findOne({
        where: { id },

        attributes: ["id", "breeder", "address", "phone"]
      });
      res.status(200).send({ data });
    } else {
      res.status(400).send({ message: "forbidden" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.userDestroy = async (req, res) => {
  const { id } = req.params;
  const id_user = req.user;
  try {
    if (id_user == id) {
      const destroy = await user.destroy({ where: { id } });
      res.status(200).send({ message: "berhasil dihapus", where: { id } });
    } else {
      res.status(400).send({ message: "forbidden" });
    }
  } catch (err) {
    console.log(err);
  }
};
