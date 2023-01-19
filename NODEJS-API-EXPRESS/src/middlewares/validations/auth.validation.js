const joi = require("joi")
const APIError = require("../../utils/errors")

class authValidation {
    constructor() {}
    static register = async (req, res, next) => {
        try {

            await joi.object({
                Name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "İsim Alanı Normal Metin Olmalıdır",
                    "string.empty": "İsim Alanı Boş Olamaz !",
                    "string.min": "İsim Alanı Ez Az 3 Karakter Olmalıdır",
                    "string.max": "İsim Alanı En Fazla 100 Karakterden Oluşabilir",
                    "string.required": "İsim Alanı Zorunludur"
                }),
                Surname: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Soyad Alanı Normal Metin Olmalıdır",
                    "string.empty": "Soyad Alanı Boş Olamaz !",
                    "string.min": "Soyad Alanı Ez Az 3 Karakter Olmalıdır",
                    "string.max": "Soyad Alanı En Fazla 100 Karakterden Oluşabilir",
                    "string.required": "Soyad Alanı Zorunludur"
                }),
                eMailAddress: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Email Alanı Normal Metin Olmalıdır",
                    "string.empty": "Email Alanı Boş Olamaz !",
                    "string.min": "Email Alanı Ez Az 3 Karakter Olmalıdır",
                    "string.email": "Lütfen Geçerli Bir Email Giriniz",
                    "string.max": "Email Alanı En Fazla 100 Karakterden Oluşabilir",
                    "string.required": "Email Alanı Zorunludur"
                }),
                Password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre Alanı Normal Metin Olmalıdır",
                    "string.empty": "Şifre Alanı Boş Olamaz !",
                    "string.min": "Şifre Alanı Ez Az 6 Karakter Olmalıdır",
                    "string.max": "Şifre Alanı En Fazla 36 Karakterden Oluşabilir",
                    "string.required": "Şifre Alanı Zorunludur"
                }),
                TcKimlikNo: joi.string().trim().min(11).max(11).required().messages({
                    "string.base": "TcKimlikNo Alanı Normal Metin Olmalıdır",
                    "string.empty": "TcKimlikNo Alanı Boş Olamaz !",
                    "string.min": "TcKimlikNo Alanı Ez Az 11 Karakter Olmalıdır",
                    "string.max": "TcKimlikNoAlanı En Fazla 11 Karakterden Oluşabilir",
                    "string.required": "TcKimlikNo Alanı Zorunludur"
                }),
               PhoneNumber: joi.string().trim().min(3).max(100).messages({
                    "string.base": "Telefon No Alanı Normal Metin Olmalıdır",

                }),
                Address: joi.string().trim().min(3).max(300).messages({
                    "string.base": "Address alanı Normal Metin Olmalıdır",
                })
            }).validateAsync(req.body)
        } catch (error) {
            if (error.details && error?.details[0].message) 
                throw new APIError(error.details[0].message, 400)
            else throw new APIError("Lütfen Validasyon Kullarına Uyun", 400)
        }
        next()
    }

    static login = async (req, res, next) => {
        try {
            await joi.object({
                eMailAddress: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Email Alanı Normal Metin Olmalıdır",
                    "string.empty": "Email Alanı Boş Olamaz !",
                    "string.min": "Email Alanı Ez Az 3 Karakter Olmalıdır",
                    "string.email": "Lütfen Geçerli Bir Email Giriniz",
                    "string.max": "Email Alanı En Fazla 100 Karakterden Oluşabilir",
                    "string.required": "Email Alanı Zorunludur"
                }),
                Password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre Alanı Normal Metin Olmalıdır",
                    "string.empty": "Şifre Alanı Boş Olamaz !",
                    "string.min": "Şifre Alanı Ez Az 6 Karakter Olmalıdır",
                    "string.max": "Şifre Alanı En Fazla 36 Karakterden Oluşabilir",
                    "string.required": "Şifre Alanı Zorunludur"
                })
            }).validateAsync(req.body)
        } catch (error) {
            if (error.details && error?.details[0].message) 
                throw new APIError(error.details[0].message, 400)
            else throw new APIError("Lütfen Validasyon Kullarına Uyun", 400)
        }
        next();
    }
}

module.exports = authValidation