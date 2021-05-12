const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user').default;
exports.signup = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const userDetails = {
    name: request.body.name,
    email: email,
    password: hashedPassword,
  };

  // Save Tutorial in the database
  User.signup(userDetails)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// exports.signup = async (req, res, next) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) return;

//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 12);

//     const userDetails = {
//       name: name,
//       email: email,
//       password: hashedPassword,
//     };

//     const result = await User.save(userDetails);

//     res.status(201).json({ message: 'User registered!' });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.login = async (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   try {
//     const user = await User.find(email);

//     if (user[0].length !== 1) {
//       const error = new Error('A user with this email could not be found.');
//       error.statusCode = 401;
//       throw error;
//     }

//     const storedUser = user[0][0];

//     const isEqual = await bcrypt.compare(password, storedUser.password);

//     if (!isEqual) {
//       const error = new Error('Wrong password!');
//       error.statusCode = 401;
//       throw error;
//     }

//     const token = jwt.sign(
//       {
//         email: storedUser.email,
//         userId: storedUser.id,
//       },
//       'secretfortoken',
//       { expiresIn: '1h' }
//     );
//     res.status(200).json({ token: token, userId: storedUser.id });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };