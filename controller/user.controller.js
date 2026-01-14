const UserService = require("../services/user_services");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    await UserService.registerUser(email, password);

    res.status(201).json({
      status: true,
      success: "User Registered Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.checkuser(email);
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "Invalid password",
      });
    }

    const tokenData = { _id: user._id, email: user.email };
    const token = await UserService.generateToken(
      tokenData,
      "secretKey",
      "1h"
    );

    res.status(200).json({
      status: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
