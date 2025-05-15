const invoices = [
  { date: 'March, 01, 2020', id: '#MS-415646', amount: '$180' },
  { date: 'February, 10, 2021', id: '#RV-126749', amount: '$250' },
  { date: 'April, 05, 2020', id: '#FB-212562', amount: '$550' },
  { date: 'June, 25, 2019', id: '#QW-103578', amount: '$120' },
  { date: 'March, 01, 2019', id: '#AR-803481', amount: '$300' },
];

const Invoices = () => (
  <div className="bg-white dark:bg-[#0e1a39] rounded-xl p-4 shadow w-full text-gray-800 dark:text-white">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Invoices</h2>
      <button className="text-sm text-blue-500 dark:text-blue-400">View all</button>
    </div>
    <ul className="space-y-2">
      {invoices.map((inv, i) => (
        <li
          key={i}
          className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-600 pb-2"
        >
          <div>
            <div>{inv.date}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{inv.id}</div>
          </div>
          <div className="flex items-center gap-2">
            <span>{inv.amount}</span>
            <button className="text-blue-500 dark:text-blue-400 text-xs">PDF</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Invoices;
