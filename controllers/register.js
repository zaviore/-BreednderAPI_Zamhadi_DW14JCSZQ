const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const Pet = models.pet;

exports.Register = async (req, res) => {
  const { breeder, email, password, phone, address, pet } = req.body;
  const { nama_pet, gender_pet } = pet;
  const id_species = pet.species.id;
  const age = pet.age.id;
  const roles = "user";

  try {
    const user = await User.create({
      breeder,
      email,
      password,
      phone,
      address,
      roles
    });
    const id_user = user.dataValues.id;
    const rePet = await Pet.create({
      nama_pet,
      gender_pet,
      id_species,
      age,
      id_user
    });

    if (user && rePet) {
      const token = jwt.sign({ id_user }, process.env.SECRET_KEY);
      res.status(200).send({ message: "Register success", email, token });
    } else {
      res.status(401).send({ status: false, message: "invalid register" });
    }
  } catch (err) {
    console.log(err);
  }
};
