import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { faker } from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BarChart({ title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: labels.map(() => Math.random()),
        backgroundColor: "#4b0dba",
      },
    ],
  };
  return (
    <div
      style={{
        width: "48%",
        minHeight: "350px",
        background: "#fff",
        boxShadow: "4px 4px 8px #eee",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}
