const models = require("../models");
const user = models.user;
const pet = models.pet;
const payment = models.payment;

exports.addPayment = async (req, res) => {
  const { no_rek, proof } = req.body;
  const id_user = req.user;

  try {
    const check = await user.findOne({ where: { id: id_user } });
    if (check.roles === "admin") {
      res.status(401).send({ message: "admin cannot use payment" });
    } else {
      const status = "free";
      const pay = await payment.create({
        no_rek,
        proof,
        status,
        id_user
      });

      const data = await payment.findOne({
        where: { id: pay.id },
        attributes: { exclude: ["id_user", "createdAt", "updatedAt"] },
        include: [
          {
            model: user,
            as: "users",
            attributes: {
              exclude: [
                "password",
                "address  ",
                "createdAt",
                "updatedAt",
                "roles"
              ]
            }
          }
        ]
      });

      res.status(200).send({
        data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.updatePayment = async (req, res) => {
  const { no_rek, proof, status } = req.body;
  const id_user = req.user;
  const id = req.params.id;

  try {
    const check = await user.findOne({
      where: { id: id_user }
    });

    if (check.roles === "user") {
      res.status(401).send({ message: "you are not admin" });
    } else {
      const pay = await payment.update(
        {
          no_rek,
          proof,
          status
        },
        { where: { id } }
      );

      const data = await payment.findOne({
        where: { id },
        attributes: { exclude: ["id_user", "createdAt", "updatedAt"] },
        include: [
          {
            model: user,
            as: "users",
            attributes: {
              exclude: [
                "password",
                "address  ",
                "createdAt",
                "updatedAt",
                "roles"
              ]
            }
          }
        ]
      });

      res.status(200).send({
        data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
