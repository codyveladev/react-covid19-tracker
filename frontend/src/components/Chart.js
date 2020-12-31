import React from "react";
import { Line } from "react-chartjs-2";

export default function Chart({numbers, dates, county, deaths}) {

  let input = {
    labels: dates, // props.dates
    datasets: [
      {
        label: "Number of cases",
        backgroundColor: "rgb(130, 6, 12)",
        borderColor: "rgb(130, 6, 12)",
        fill: false,
        borderWidth: 2,
        data: numbers, // props.numbers
        lineTension: 0.75,
      },
      {
        label: "Number of deaths",
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(0,0,0)",
        fill: false,
        borderWidth: 2,
        data: deaths, // props.numbers
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
            text: `Total COVID-19 Cases for ${county} county`,
            fontSize: 30,
            fontColor: 'black'
          },
          legend: {
            display: true,
            position: "bottom",
          },
      }}
      />
    </div>
  );
}
