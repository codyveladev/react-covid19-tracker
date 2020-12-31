const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const fs = require('fs')

const port = 8080;

app.use(cors());
app.use(express.json());


app.get("/county/:countyToSearch", async (req, res) => {
  try {
    console.log(req.params.countyToSearch)
    const response = await axios.get(
      `https://corona.lmao.ninja/v2/historical/usacounties/texas?lastdays=${req.query.days}`
    );


    const filterRes = response.data.find((listItem) => listItem.county === `${req.params.countyToSearch}`);

    console.log(filterRes.timeline.deaths);

    const { county } = filterRes;

    const dates = Object.keys(filterRes.timeline.cases);

    const numbers = Object.values(filterRes.timeline.cases);
    
    const deaths = Object.values(filterRes.timeline.deaths);
    

    const stats = await axios.get(
      `https://corona.lmao.ninja/v2/states/texas?yesterday=true`
    );

    const { tests }  = stats.data
    const deathToll = stats.data.deaths
  

    res.send({county, numbers, dates, deaths, tests, deathToll})

  } catch (error) {
      console.log(error)
  }
});

app.listen(8080, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
