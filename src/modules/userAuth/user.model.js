const mongoose = require("mongoose") , bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Z]+$/i.test(v) && /^.{20}$/.test(v);
            },
            message: "Name can contain only alphabets with max length of 20 characters!"
        }
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Z]+$/i.test(v) && /^.{20}$/.test(v);
            },
            message: "Name can contain only alphabets with max length of 20 characters!"
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Z0-9]+@+[A-Z0-9]+.+[A-Z]/i.test(v);
            },
            message: "Please enter a valid email id!"
        }
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: '{VALUE} is not a valid value.'
        },
        required: true
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid mobile number.`
        }
    },
    countryCode: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: function (v) {
                return /\+\d+/.test(v);   // must start with +
            },
            message: props => `${props.value} is not a valid country code.`
        }

    },
    passwordHash :{
        type: String,
        trim: true,
        required: true
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
})


userSchema.virtual("password").get(function(){
return this._password
}).set(function(value){
    this._password = value;
    let saltRounds = 12;
    this.passwordHash = bcrypt.hashSync(this._password,saltRounds);
})
userSchema.virtual("fullName").get(function () {
    return this.firstName[0].toUpperCase()
        + this.firstName.slice(1).toLowerCase()
        + " " + this.lastName[0].toUpperCase()
        + this.lastName.slice(1).toLowerCase();
});


const user = mongoose.model("user", userSchema);

module.exports = user;