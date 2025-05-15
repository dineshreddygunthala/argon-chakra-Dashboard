// File: src/components/SalesChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data = {
  labels,
  datasets: [
    {
      label: 'Performance',
      data: [65, 59, 80, 81, 56, 55, 70],
      fill: true,
      backgroundColor: 'rgba(66, 153, 225, 0.2)', // Light blue fill
      borderColor: '#4299e1', // Blue-500 line
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#4299e1',
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
    tooltip: {
      mode: 'index',
      intersect: false,
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

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-[260px] dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-sm font-semibold mb-2">Performance</h2>
      <div className="h-[180px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
