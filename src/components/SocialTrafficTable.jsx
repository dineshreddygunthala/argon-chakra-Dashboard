import React from 'react';

const rows = [
  { source: 'Facebook', visitors: 1480, percent: 60 },
  { source: 'Google', visitors: 1320, percent: 50 },
  { source: 'Instagram', visitors: 980, percent: 30 },
  { source: 'Twitter', visitors: 720, percent: 20 },
  { source: 'Instagram', visitors: 700, percent: 20 },
  { source: 'Google', visitors: 1320, percent: 50 },
];

const SocialTrafficTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Social Traffic</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs text-gray-700">
          <thead className="uppercase bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Referral</th>
              <th className="px-3 py-2 text-right">Visitors</th>
              <th className="px-3 py-2 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 dark:text-gray-50">
                <td className="px-3 py-2 font-medium">{row.source}</td>
                <td className="px-3 py-2 text-right">{row.visitors}</td>
                <td className="px-3 py-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="w-6">{row.percent}%</span>
                    <div className="w-16 bg-gray-200 h-1 rounded">
                      <div
                        className="bg-blue-500 h-1 rounded"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialTrafficTable;
