const axios = require("axios");
const express = require("express");
const cors = require("cors")
const overwatch = require('overwatch-api');

const app = express();


app.use(express.json({
  extended: false
}))
app.use(cors())



app.post("/user", (req, res) => {
  console.log(req.body.pseudo)
  axios.get("https://api.fortnitetracker.com/v1/profile/" + req.body.platform + "/" + req.body.pseudo,
    {
      headers: {
        'TRN-Api-Key': 'cf7db45c-2c13-4e4e-a805-e5c01740324b'
      }
    })
    .then(function (response) {
      console.log(res.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("err", error);
      res.send("error");
    });
})

app.post("/overwatch", (req, res) => {

  const platform = req.body.platform;
  const region = req.body.region;
  const tag = req.body.pseudo;

  overwatch.getProfile(platform, region, tag, (err, json) => {
    if (err) console.error(err);
    else {
      console.log(json);
      res.send(json);
    }
  });
})


app.post("/apex", (req, res) => {
  console.log('dsdssdsd');
  console.log(req.body)
  axios.get("https://public-api.tracker.gg/v2/apex/standard/profile/" + req.body.platform + "/" + req.body.pseudo,
    {
      headers: {
        'TRN-Api-Key': 'cf7db45c-2c13-4e4e-a805-e5c01740324b'
      }
    })
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("err", error);
      res.send("error");
    });
})

app.listen(8888);
