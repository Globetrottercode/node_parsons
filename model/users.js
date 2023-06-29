const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: {
    type: String,
    required: true,
  },
});

userSchema.plugin(findOrCreate);

module.exports.User = mongoose.model("user", userSchema);
