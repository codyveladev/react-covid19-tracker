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
   
    const response = await axios.get(
      `https://corona.lmao.ninja/v2/historical/usacounties/texas?lastdays=${req.query.days}`
    );

    //Filter based on county
    const filterRes = response.data.find(
      (listItem) => listItem.county === `${req.params.countyToSearch}`
    );
    //Get the county back
    const { county } = filterRes;

    //Get the dates from the time line object (which is the key value)
    const dates = Object.keys(filterRes.timeline.cases);

    //Get the numbers (cases) from the time line object
    const numbers = Object.values(filterRes.timeline.cases);

    //Get the numbers (cases) from the time line object
    const deaths = Object.values(filterRes.timeline.deaths);


    //This call is to get the total tested and death toll
    const stats = await axios.get(
      `https://corona.lmao.ninja/v2/states/texas?yesterday=true`
    );

    //Parse the results from the second api call
    const { tests } = stats.data;
    const deathToll = stats.data.deaths;

    //Send back the data to the front end. 
    res.send({ county, numbers, dates, deaths, tests, deathToll });
  
  } catch (error) {
      console.log(error)
  }
});

app.listen(8080, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
