// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import BarChart from '../components/BarChart';
import PageVisitsTable from '../components/PageVisitsTable';
import SocialTrafficTable from '../components/SocialTrafficTable';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-[#0b1437] dark:text-gray-100">
      

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        

        <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Traffic"
              value="350,897"
              change="+3.48%"
              iconKey="money"
              color="bg-blue-500"
            />
            <StatCard
              title="New Users"
              value="2,356"
              change="-3.48%"
              iconKey="users"
              color="bg-pink-500"
            />
            <StatCard
              title="Sales"
              value="924"
              change="+1.10%"
              iconKey="sales"
              color="bg-green-500"
            />
            <StatCard
              title="Performance"
              value="49.65%"
              change="+12%"
              iconKey="clients"
              color="bg-yellow-500"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SalesChart />
            <BarChart />
          </div>

          {/* Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PageVisitsTable />
            <SocialTrafficTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
