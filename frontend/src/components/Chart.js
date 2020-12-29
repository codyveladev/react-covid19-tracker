import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const axios = require("axios");


export default function Chart() {
  const [numbers, setNumbers] = useState();
  const [dates, setDates] = useState();
  const [county, setCounty] = useState()
  const [percentIncrease, setPercentIncrease] = useState();


  const getData = () => {
      axios
        .get("http://localhost:8080/county/comal?days=30")
        .then((response) => {
          setCounty(response.data.county);
          setNumbers(response.data.numbers);
          setDates(response.data.dates);


          getPercentDiff(response.data.numbers)
        })
        .catch((err) => console.log(err));

  }
  const getPercentDiff = (numbers) => {
      let diff = ((numbers[numbers.length - 1] - numbers[0]) / Math.abs(numbers[0]))
      setPercentIncrease((diff * 100).toFixed(2))
  }

  useEffect(() => {
      getData()

  }, []);



  let input = {
    labels: dates,
    datasets: [
      {
        label: "Number of cases",
        backgroundColor: "rgb(130, 6, 12)",
        borderColor: "rgb(130, 6, 12)",
        fill: false,
        borderWidth: 2,
        data: numbers,
        lineTension: 0.75,
      },
    ],
  };

  return (
    <div>
      <Line
        height={150}
        data={input}
        options={{
          title: {
            display: true,
            text: `COVID-19 Cases for ${county} county`,
            fontSize: 30,
            fontColor: 'black'
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
      <p>Percent Increase: {percentIncrease}%</p>
    </div>
  );
}
