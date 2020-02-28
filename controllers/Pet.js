const jwt = require("jsonwebtoken");
const models = require("../models");
const user = models.user;
const pet = models.pet;
const species = models.species;
const payment = models.payment;

// ========================add pet=============================
exports.addpet = async (req, res) => {
  const id_user = req.user;
  const users = req.body.user.id;
  const chkStatus = payment.findOne({ where: { id: users } });

  const {
    nama_pet,
    gender_pet,
    species: { id_species },
    age,
    about_pet,
    photo
  } = req.body;
  let datetime = new Date();
  try {
    if (chkStatus.status === "premium" && users === id_user) {
      const petInput = await pet.create({
        nama_pet,
        gender_pet,
        id_user,
        id_species,
        age,
        about_pet,
        foto: photo,
        createdAt: datetime,
        updatedAt: datetime
      });

      let petData = await pet.findOne({
        where: {
          nama_pet
        },
        include: [
          {
            model: species,
            as: "category",
            attributes: ["id", "nama_species"]
          },

          {
            model: User,
            as: "breeder",
            attributes: ["id", "breeder", "address", "phone"]
          }
        ]
      });

      res.status(200).send({
        petData
      });
    } else {
      res.status(400).send({
        message: " this just for premium account"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.petindex = async (req, res) => {
  try {
    const pety = await pet.findAll({
      include: [
        {
          model: species,
          as: "category",
          attributes: ["id", "nama_species"]
        },

        {
          model: User,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        }
      ]
    });
    res.status(200).send({ pety });
  } catch (err) {
    console.log(err);
  }
};

exports.petDestroy = async (req, res) => {
  try {
    const { id } = req.params;
    const id_user = req.user;
    const checkUser = await user.findOne({ where: { id: id_user } });
    const checkPet = await pet.findOne({ where: { id } });
    if (checkUser.id === checkPet.id_user) {
      const destroy = await pet.destroy({ where: { id } });
      res.status(200).send({ message: "success ", where: { id } });
    } else {
      res.status(401).send({ message: " you are not allowed " });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.petUpdate = async (req, res) => {
  const { id } = req.params;
  const id_user = req.user;
  const checkUser = await user.findOne({ where: { id: id_user } });
  const checkPet = await pet.findOne({ where: { id } });
  const {
    nama_pet,
    gender_pet,
    species: { id_species, name_species },
    age,
    about_pet,
    foto: photo
  } = req.body;

  try {
    if (checkUser.id === checkPet.id_user) {
      const update = await pet.update(
        { nama_pet, gender_pet, id_species, age, id_user, about_pet, photo },
        { where: { id } }
      );

      const data = await pet.findOne({
        where: { id },

        include: [
          {
            model: species,
            as: "category",
            attributes: ["id", "nama_species"]
          },

          {
            model: user,
            as: "breeder",
            attributes: ["id", "breeder", "address", "phone"]
          }
        ]
      });
      res.status(200).send({ data });
    } else {
      res.status(401).send({ message: " you are not allowed " });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.petDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const datas = await pet.findOne({
      where: { id },

      include: [
        {
          model: species,
          as: "category",
          attributes: ["id", "nama_species"]
        },

        {
          model: User,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        }
      ]
    });
    res.status(200).send({ datas });
  } catch (err) {
    console.log(err);
  }
};

// exports.showpet = async (req, res) => {
//   try {
//     const spec = await species.findAll({});
//     res.status(200).send({ spec });
//   } catch (err) {
//     console.log(err);
//   }
// };
