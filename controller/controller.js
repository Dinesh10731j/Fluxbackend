const FluxModel = require("../model/flux");
const { FluxUserModel } = require("../model/fluxsignup");
const sendEmail = require("../services/EmailService");

const Blogs = async (req, res) => {
  try {
    const fluxBloggers = await FluxModel.find({});
    res.status(200).json({ data: fluxBloggers });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

const getStarted = async (req, res) => {
  try {
    const { title, author, categories, blog } = req.body;

    const fluxuser = new FluxModel({ title, author, categories, blog });
    await fluxuser.generateAuthToken();
    await fluxuser.save();

    res.status(201).send({ msg: "Created successfully", token: fluxuser.token });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error", error: err.message });
  }
};

const FluxSubscribe = async (req, res) => {
  try {
    let { useremail } = req.body;
    useremail = useremail.toLowerCase().trim();

    const AlreadyExists = await FluxUserModel.findOne({ useremail });

    if (AlreadyExists) {
      return res.status(409).send({ msg: "User already exists" });
    }

    const SubscribeUsers = await FluxUserModel.create({ useremail });

    if (SubscribeUsers) {
      await sendEmail(useremail, "Thank you for subscribing to Flux!");
      return res.status(201).send({ msg: "Subscribe Successful" });
    }
  } catch (err) {
    console.error('Error in subscription:', err);
    res.status(500).send({ msg: "Internal server error" });
  }
};

module.exports = { Blogs, getStarted, FluxSubscribe };
