const user = require("../models/user.model")
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const { createToken } = require("../middlewares/auth");

const login = async (req, res) => {
    console.log("login");
    const { eMailAddress, Password } = req.body

    const userInfo = await user.findOne({ where: {eMailAddress: eMailAddress} });

    if (!userInfo)
        throw new APIError("Email yada Şifre Hatalıdır !",401)

    const comparePassword = await bcrypt.compare(Password, userInfo.Password)
  //  console.log(comparePassword);

    if (!comparePassword)
        throw new APIError("Email yada Şifre Hatalıdır !",401)

    createToken(userInfo, res)
}

const register = async (req, res) => {
    const { eMailAddress } = req.body

    const userCheck = await user.findOne({ where: { eMailAddress: eMailAddress } });

    if (userCheck) {
        throw new APIError("Girmiş Olduğunuz Email Kullanımda !", 401)
    }

    req.body.Password = await bcrypt.hash(req.body.Password, 10)


    const userSave = new user(req.body)

    await userSave.save()
        .then((data) => {
             
            return new Response(data, "Kayıt Başarıyla Eklendi").created(res)
        })
        .catch((err) => {
            throw new APIError("Kullanıcı Kayıt Edilemedi !", 400)
        })

        userSave.reload();

}

const me = async (req, res) => {
    return new Response(req.user).success(res)
}

module.exports = {
    login,
    register,
    me
}