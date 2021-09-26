const bcrypt = require("bcrypt")
const userModel = require("../user");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const register = async (req, res) => {
  try {
    const { body } = req;

    const salt = await bcrypt.genSalt(10);
    console.log("......", body.password);
    body.password = await bcrypt.hash(body.password, salt);

    const user = await userModel.create(body);

    return res.json({ user });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new Error("wrong password");
    }

    /// token
    const token = jwt.sign({ user_id: user._id, email }, "geurghute", {
      expiresIn: "5h",
    });
    res.json(token);
  } catch (error) {
    console.log("error", error);
    res.send(error.message);
  }
};

module.exports = { register, login };
