import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [0, 2, 4, 6, 8, 10];

export const data = {
  labels,
  datasets: [
    {
      label: "Tasks submitted",
      data: labels.map(() => Math.random()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function LinkChart() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        background: "#fff",
        boxShadow: "4px 4px 8px #eee",
        borderRadius: "8px",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <Line options={options} data={data} />
    </div>
  );
}
