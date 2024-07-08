import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", ""], // Empty labels to remove x-axis values
  datasets: [
    {
      label: "Dataset 1",
      data: [15, 8, 5, 10, 18, 5, 9, 8, 15, 20, 12, 14], // Approximate values for the solid blue line
      borderColor: "blue",
      fill: false, // No fill under the line
      tension: 0, // Make the line straight
      pointRadius: 0 // Remove data points
    },
    {
      label: "Dataset 2",
      data: [5, 3, 1, 6, 1, 0, 4, 2, 7, 3, 1, 11], // Approximate values for the dashed gray line
      borderColor: "grey",
      borderDash: [5, 5], // Dashed line style
      fill: false,
      tension: 0,
      pointRadius: 0
    }
  ]
};

const options = {
  responsive: true, // Make the chart responsive
  plugins: {
    legend: {
      display: false // Hide the legend since it's not in the image
    },
    title: {
      display: false // Hide the title
    }
  },
  scales: {
    x: {
      display: false, // Hide the x-axis labels
      grid: {
        display: false // Hide the x-axis grid lines
      }
    },
    y: {
      display: false, // Hide the y-axis labels
      grid: {
        display: false // Hide the y-axis grid lines
      }
    }
  },
  layout: {
    padding: 20 // Add some padding around the chart
  }
};
const BoostingBusinesssGraph = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-[#F4F4F4] p-4 dark:border-[rgb(177,173,173)] dark:bg-[#1A1A1A]">
      <div className="m-auto h-[80%]">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default BoostingBusinesssGraph;
