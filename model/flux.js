const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error while connecting database", err));

const FluxSchema = new mongoose.Schema({
  title: String,
  author: String,
  categories: String,
  blog: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
});

FluxSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ title: this.title }, process.env.Signature);
  this.token = token;
  return token;
};

const FluxModel = mongoose.model('Flux', FluxSchema);

module.exports = FluxModel;
