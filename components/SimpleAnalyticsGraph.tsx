import { BiSolidUpArrowCircle } from "react-icons/bi";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const data = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", ""], // Empty labels for no x-axis values
  datasets: [
    {
      data: [10, 12, 8, 11, 6, 15, 25, 28, 26, 24, 22, 30], // Approximate values from the image
      borderColor: "#48CAE4", // Light blue line color
      backgroundColor: "rgba(72, 202, 228, 0.2)", // Light blue fill color
      borderWidth: 3, // Thicker line
      tension: 0.4, // Slight curve for the line
      fill: true, // Fill area under the curve
      pointRadius: 0 // Remove data points
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false // Hide the legend
    },
    title: {
      display: false // Hide the title
    }
  },
  scales: {
    x: {
      display: false, // Hide the x-axis
      grid: {
        display: false // Hide the x-axis grid
      }
    },
    y: {
      display: false, // Hide the y-axis
      grid: {
        display: false // Hide the y-axis grid
      },
      suggestedMin: 0, // Start y-axis at 0 if needed
      suggestedMax: 35 // Adjust maximum y-axis value
    }
  },
  layout: {
    padding: 20
  }
};
const SimpleAnalyticsGraph = () => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border bg-[#F4F4F4] p-2 dark:border-[rgb(177,173,173)] dark:bg-[#1A1A1A]">
      <p className="flex items-center gap-3 pr-4 dark:text-[#33C6AB]">
        <span>
          <BiSolidUpArrowCircle
            className="text-black dark:text-[#33C6AB]"
            size={22}
          />
        </span>
        14.12%
      </p>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default SimpleAnalyticsGraph;
