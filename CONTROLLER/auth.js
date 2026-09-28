const Auth = require("../MODEL/auth");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { fullname, email, username, password } = req.body;
    const existingUser = await Auth.findOne({ username });
    if (existingUser) {
      return res.status(401).json({
        message: "User is already registered by this email",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const signedUp = await Auth.create({
        fullname: fullname,
        email: email,
        username: username,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "User Signed up successfully",
        user: signedUp,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Error occured during user sign up",
      error: error,
    });
  }
};

const logIn = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await Auth.findOne({ username });
  if (!existingUser) {
    return res.status(401).json({
      message: "User is not registered. Sign Up first",
    });
  }
};

module.exports = { signUp, logIn };
