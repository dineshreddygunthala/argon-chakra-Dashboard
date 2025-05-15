import React from 'react';

const tableData = [
  { page: '/dashboard', visitors: 3500, uniqueUsers: 3000, bounceRate: '46.53%' },
  { page: '/profile', visitors: 2220, uniqueUsers: 2000, bounceRate: '35.24%' },
  { page: '/settings', visitors: 1500, uniqueUsers: 1200, bounceRate: '50.00%' },
  { page: '/tables', visitors: 1100, uniqueUsers: 800, bounceRate: '45.00%' },
  { page: '/maps', visitors: 800, uniqueUsers: 600, bounceRate: '60.00%' },
];

const PageVisitsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-sm  dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-base font-semibold mb-3">Page Visits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs  dark:bg-blue-900 dark:text-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Page</th>
              <th className="px-3 py-2 text-right">Visitors</th>
              <th className="px-3 py-2 text-right">Unique Users</th>
              <th className="px-3 py-2 text-right">Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-700  dark:text-gray-50">{row.page}</td>
                <td className="px-3 py-2 text-right">{row.visitors}</td>
                <td className="px-3 py-2 text-right">{row.uniqueUsers}</td>
                <td className="px-3 py-2 text-right">{row.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageVisitsTable;
