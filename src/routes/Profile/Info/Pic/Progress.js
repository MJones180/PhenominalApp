import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { sand } from 'styles/variables';

export default (data) => {
  let { count, goal } = data;
  // Display empty bar when count is not passed
  if (!count) {
    count = 0;
    goal = 1;
  }
  // Display full bar when goal is not passed
  if (!goal) {
    count = 1;
    goal = 1;
  }
  // Boost Bubble's (30x30) angle in radians
  const boostBubbleAngle = 0.296706;
  const boostBubbleAngleHalf = 0.148353;
  // PI constant
  const pi = Math.PI;
  return (
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
        // Starting point of progress bar
        rotation: (-0.5 * pi) + boostBubbleAngleHalf,
        // Total arc of progress bar
        circumference: (2 * pi) - boostBubbleAngle,
      }}
      height={180}
      width={180}
    />
  );
};
