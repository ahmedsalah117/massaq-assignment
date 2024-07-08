"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
const data = {
  labels: [
    "12:00AM",
    "01:00AM",
    "02:00AM",
    "03:00AM",
    "04:00AM",
    "05:00AM",
    "06:00AM",
    "07:00AM",
    "08:00AM",
    "09:00AM",
    "10:00AM",
    "11:00AM"
  ],
  datasets: [
    {
      label: "Spend Overview",
      data: [5500, 3000, 4500, 6000, 6500, 6000, 4000, 3000, 4000, 5000, 6000, 6500],
      tension: 0.4, // Adjust for curve smoothness
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      pointBackgroundColor: "rgb(75, 192, 192)",
      pointBorderColor: "white",
      pointRadius: 5,
      pointHoverRadius: 8
    }
  ]
};

const StatisticsGraph = ({ mode }: { mode: "light" | "dark" }) => {
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        display: false // Hide the legend if you don't need it
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Customize grid color and style
          borderDash: [5, 5]
        },
        ticks: { color: "rgba(0, 0, 0, 0.5)" } // Customize tick color
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          borderDash: [5, 5]
        },
        ticks: { color: "rgba(0, 0, 0, 0.5)" },
        beginAtZero: true // Start y-axis at 0
      }
    }
  });

  useEffect(() => {
    if (mode === "dark") {
      setOptions({
        responsive: true,
        plugins: {
          legend: {
            display: false // Hide the legend if you don't need it
          }
        },
        scales: {
          x: {
            grid: {
              color: "rgba(86, 85, 85, 1)", // Customize grid color and style
              borderDash: [5, 5]
            },
            ticks: { color: "rgba(255, 255, 255, 1)" } // Customize tick color
          },
          y: {
            grid: {
              color: "rgba(86, 85, 85, 1)",
              borderDash: [5, 5]
            },
            ticks: { color: "rgba(255, 255, 255, 1)" },
            beginAtZero: true // Start y-axis at 0
          }
        }
      });
    } else {
      setOptions({
        responsive: true,
        plugins: {
          legend: {
            display: false // Hide the legend if you don't need it
          }
        },
        scales: {
          x: {
            grid: {
              color: "rgba(0, 0, 0, 0.1)", // Customize grid color and style
              borderDash: [5, 5]
            },
            ticks: { color: "rgba(0, 0, 0, 0.5)" } // Customize tick color
          },
          y: {
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
              borderDash: [5, 5]
            },
            ticks: { color: "rgba(0, 0, 0, 0.5)" },
            beginAtZero: true // Start y-axis at 0
          }
        }
      });
    }
  }, [mode]);

  return (
    <Line
      options={options}
      data={data}
    />
  );
};

export default StatisticsGraph;
