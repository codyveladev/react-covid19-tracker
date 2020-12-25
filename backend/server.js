const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const { response } = require("express");

const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://corona.lmao.ninja/v2/historical/usacounties/texas?lastdays=90"
    );


    const filterRes = response.data.find((listItem) => listItem.county === 'travis');

    const { county } = filterRes

    const { cases } = filterRes.timeline

    // console.log(cases)

    /**
     * 
     * This is O(n^2) to process the api response and
     * turn it in to two seperate arrays 
     * This can probably be done more effiencently. 
     */


    const dataProcessed = Object.entries(cases)

    let dates = dataProcessed.map((entry) =>{
       return entry[0]
    })

    let numbers = dataProcessed.map((entry) => {
      return entry[1];
    });

    console.log('im being called!')



    res.send({numbers, dates, county})

  } catch (error) {
      console.log(error)
  }
});

app.listen(8080, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
