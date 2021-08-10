const express = require("express");
const FormData = require("form-data");
const fetch = require("node-fetch");
const axios = require("axios");
const { client_id, redirect_url, client_secret } = require("./config");

// const config = require("./config");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json({ type: "text/*" }));

// Enabled Access-Control-Allow-Origin", "*" in the header so as to by-pass the CORS error.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/authenticate", (req, res) => {
  const { code } = req.body;

  const data = {
    client_id: client_id,
    client_secret: client_secret,
    redirect_url: redirect_url,
    code: code,
  };

  // client_id
  // client_secret
  // redirect_url

  // Request to exchange code for an access token

  axios
    .post(`https://github.com/login/oauth/access_token`, data)
    .then((response) => response.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get("access_token");
      console.log("hi");

      // Request to return data of a user that has been authenticated
      return fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
