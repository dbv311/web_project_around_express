const mongoose = require("mongoose");

const regExpLink =
  /^((http|https):\/\/)(w{3}\.)?[\w~:/?%#[\]@!$&'.()*+,;=]*\/#?/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    link: [
      {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return regExpLink.test(v);
          },
          message: "NOT FOUND",
        },
      },
    ],
  },
});

module.exports = mongoose.model("user", userSchema);
