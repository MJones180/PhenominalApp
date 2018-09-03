import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import colors from 'styles/variables';

export default ({ program, administrative, fundraising, other }) => (
  <Doughnut
    data={{
      datasets: [{
        data: [
          program,
          administrative,
          fundraising,
          other,
        ],
        backgroundColor: [
          colors.sand,
          colors.darkSand,
          colors.stone,
          colors.darkAzure,
        ],
        hoverBackgroundColor: colors.darkStone,
        borderColor: colors.darkStone,
        borderWidth: 1,
      }],
    }}
    options={{
      cutoutPercentage: 25,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: 'white',
        bodyFontColor: colors.darkStone,
        bodyFontFamily: 'sans-serif',
        bodyFontSize: 15,
        callbacks: {
          label: (item, data) => (
            `${data.datasets[item.datasetIndex].data[item.index]}%`
          ),
        },
        caretSize: 0,
        displayColors: false,
      },
      responsive: false,
    }}
    height={250}
    width={250}
  />
);
