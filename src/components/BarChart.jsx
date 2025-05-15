// File: src/components/BarChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [500, 700, 800, 600, 900, 750, 1000],
      backgroundColor: '#4c51bf', // Indigo
      borderRadius: 5,
      barThickness: 20,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#A0AEC0',
        font: {
          size: 10,
        },
      },
    },
    y: {
      grid: {
        color: '#EDF2F7',
      },
      ticks: {
        color: '#A0AEC0',
        font: {
          size: 10,
        },
        beginAtZero: true,
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-[260px]  dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-sm font-semibold mb-2">Sales value</h2>
      <div className="h-[180px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
