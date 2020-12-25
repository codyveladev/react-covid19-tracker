import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const axios = require("axios");


export default function Chart() {
  const [numbers, setNumbers] = useState();
  const [dates, setDates] = useState();
  const [county, setCounty] = useState()


  const getData = () => {
      axios
        .get("http://localhost:8080/data")
        .then((response) => {
          setCounty(response.data.county);
          setNumbers(response.data.numbers);
          setDates(response.data.dates);

          console.log(dates, numbers);
        })
        .catch((err) => console.log(err));

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
        borderWidth: 2
      },
    ],
  };

  return (
    <Line
      data={input}
      options={{
        title: {
          display: true,
          text: `COVID-19 Cases for ${county} county`,
          fontSize: 30,
        },
        legend: {
          display: true,
          position: "bottom",
        },
      }}
    />
  );
}
