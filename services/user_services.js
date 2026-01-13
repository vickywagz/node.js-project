const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserService {
  static async registerUser(email, password) {
    const createUser = new UserModel({ email, password });
    return await createUser.save();
  }

  static async checkuser(email) {
    return await UserModel.findOne({ email });
  }

  static async generateToken(tokenData, secretKey, jwt_expire) {
    return jwt.sign(tokenData, secretKey, {
      expiresIn: jwt_expire,
    });
  }
}

module.exports = UserService;
