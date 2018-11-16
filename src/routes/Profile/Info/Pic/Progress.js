import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { sand } from 'styles/variables';

// Boost Bubble's (30x30) angle in radians
const boostBubbleAngle = 0.296706;
const boostBubbleAngleHalf = 0.148353;

// PI constant
const pi = Math.PI;

export default ({ count, goal }) => (
  <Doughnut
    data={{
      datasets: [{
        data: [count, goal - count],
        backgroundColor: [sand, 'white'],
        hoverBackgroundColor: [sand, 'white'],
        borderWidth: 0,
      }],
    }}
    options={{
      cutoutPercentage: 92,
      legend: { display: false },
      tooltips: { enabled: false },
      responsive: false,
      rotation: (-0.5 * pi) + boostBubbleAngleHalf,
      circumference: (2 * pi) - boostBubbleAngle,
    }}
    height={180}
    width={180}
  />
);
