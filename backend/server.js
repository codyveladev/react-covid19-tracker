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

    // let allCounties = response.data.map((item) => {
    //     return item.county
    // })

    // fs.writeFileSync('./countries.json', JSON.stringify(allCounties))


    const filterRes = response.data.find((listItem) => listItem.county === `${req.params.countyToSearch}`);


    const { county, province } = filterRes

    const { cases } = filterRes.timeline

    /**
     * 
     * This is O(n^2) to process the api response and
     * turn it in to two seperate arrays for plotting
     * This can probably be done better. 
     */

    const dataProcessed = Object.entries(cases)

    let dates = dataProcessed.map((entry) =>{
       return entry[0]
    })

    let numbers = dataProcessed.map((entry) => {
      return entry[1];
    });

    console.log('im being called!')



    res.send({province, county, numbers, dates})

  } catch (error) {
      console.log(error)
  }
});

app.listen(8080, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
