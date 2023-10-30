require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;

const SITE_SECRET = process.env.PORT || process.env.REACT_APP_CAPTCHA_KEY;

app.use(cors());
app.use(express.json());

app.post("/contact/verify", async (request, response) => {
  const { recaptchaValue } = request.body;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${recaptchaValue}`
  );
  response.send(data);
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
