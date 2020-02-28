const { checkMatch, checkalreadyliked } = require("../midleware/match");
const models = require("../models");
const user = models.user;
const pet = models.pet;
const match = models.match;
const species = models.species;

exports.matchCheck = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.query;
    const isMatch = await checkMatch({ where: { pet_id, pet_id_liked } });
    if (isMatch.length > 0) {
      const data = await match.findOne({
        where: { pet_id: isMatch[0], pet_id_liked: isMatch[1] }
      });
      res.status(200).send(data);
    } else {
      res.send("no");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.matchAdd = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.body;
    const id_user = req.user;
    const checkUser = await pet.findOne({ where: { id: pet_id } });

    if (id_user == checkUser.id_user) {
      const isAlreadyLiked = await checkalreadyliked(pet_id, pet_id_liked);
      if (isAlreadyLiked) {
        const pet = await match.update(
          {
            status: "true",
            updatedAt: new Date()
          },
          {
            where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
          }
        );
        const data = await match.findOne({
          where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
        });
        res.status(200).send(data);
      } else {
        const check = await match.findOne({
          where: {
            pet_id,
            pet_id_liked
          }
        });
        if (!check) {
          const matche = await match.create({
            pet_id,
            pet_id_liked,
            status: "false",
            createdAt: new Date(),
            updatedAt: new Date()
          });
          const data = await match.findOne({
            where: { pet_id, pet_id_liked }
          });
          res.status(200).send(data);
        }
        res.status(302).send({ message: " Already like " });
      }
    } else {
      res.status(403).send({ message: "this not your pet !!" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updateMatch = async (req, res) => {
  try {
    const { pet_id, pet_id_liked, status } = req.body;
    const { id } = req.params;
    const match = await match.update(
      {
        pet_id,
        pet_id_liked,
        status,
        updatedAt: new Date()
      },
      {
        where: { id }
      }
    );
    const data = await match.findOne({
      where: { id }
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    res.send("success");
  } catch (err) {
    console.log(err);
  }
};
