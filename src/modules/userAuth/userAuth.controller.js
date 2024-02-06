// login
// signup
// forgot password
// // set middlewares for login
"use strict"
const {sendResponse} = require("../../helpers/sendResponse")
const UserModel = require("./user.model");
const userTest = async (req,res) => {
    try {
        let test = await UserModel.create({
            firstName: "testdfdf",
            lastName: "USER",
            email: "134@bUR.com",
            gender: "male",
            mobileNumber: "123-456-7893",
            countryCode: "+91",
            password : "abd"
        })

        return sendResponse({
        res,
        status:200,
        data: test,
        message: "User created successfully!",
        })
    } catch (error) {
        return sendResponse({
            res,
            status:500,
            data: {},
            message: error.message,
            })
    }

}

const signUp = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    userTest
}