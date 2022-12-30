const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const errors = validationResult(req);
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(400).json({error:`Пользователь ${login} не найден`});
      }
      if (!errors.isEmpty()) {
        return res.status(400).json({error: 'Пароль должен быть больше 4 или меньше 10 символов'});
      }
      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({ error: "Неправильный логин или пароль!" });
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token, login: payload.login, id: payload._id });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({error: 'Пароль должен быть больше 4 или меньше 10 символов'});
      }
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res
          .status(400)
          .json({error:"Пользователь с таким именем уже существует"});
      }
      const hashPassword = bcrypt.hashSync(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = User.create({
        login,
        password: hashPassword,
      });
      return res.json("Пользователь успешно зарегестрирован");
    } catch (error) {
      res.status(400).json("Registration Error" + error);
    }
  },
};
