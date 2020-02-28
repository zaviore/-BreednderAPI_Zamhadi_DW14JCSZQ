const models = require("../models");
const match = models.match;
const pet = models.pet;

exports.checkMatch = async (pet_id, pet_id_liked) => {
  try {
    const isMatch = await match.findOne({
      where: {
        pet_id,
        pet_id_liked,
        status: "true"
      }
    });
    if (isMatch) {
      return [isMatch.dataValues.pet_id, isMatch.dataValues.pet_id_liked];
    } else {
      const isMatch = await match.findOne({
        where: {
          pet_id: pet_id_liked,
          pet_id_liked: pet_id,
          status: "true"
        }
      });
      if (isMatch) {
        return [isMatch.dataValues.pet_id, isMatch.dataValues.pet_id_liked];
      } else {
        console.log(isMatch);
        return "false";
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.checkalreadyliked = async (pet_id, pet_id_liked) => {
  try {
    const isLiked = await match.findOne({
      where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
    });
    if (isLiked.pet_id) {
      return "true";
    } else {
      return "false";
    }
  } catch (err) {
    console.log(err);
  }
};
