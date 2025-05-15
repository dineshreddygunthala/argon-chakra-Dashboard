const transactions = [
  { label: 'Netflix', date: '27 March 2020, 12:30 PM', amount: '-$2500', status: 'down' },
  { label: 'Apple', date: '27 March 2020, 12:30 PM', amount: '+$2500', status: 'up' },
  { label: 'Stripe', date: '26 March 2020, 13:45 PM', amount: '+$8000', status: 'up' },
  { label: 'HubSpot', date: '26 March 2020, 12:30 PM', amount: '+$1700', status: 'up' },
  { label: 'Webflow', date: '26 March 2020, 05:00 AM', amount: 'Pending', status: 'pending' },
  { label: 'Microsoft', date: '26 March 2020, 13:45 PM', amount: '-$987', status: 'down' },
];

const Transactions = () => (
  <div className="bg-white dark:bg-[#0e1a39] dark:text-gray-50 rounded-xl p-4 shadow">
    <h2 className="text-lg font-semibold mb-4">Your Transactions</h2>
    <ul className="space-y-3 text-sm">
      {transactions.map((t, i) => (
        <li key={i} className="flex justify-between items-center">
          <div>
            <div>{t.label}</div>
            <div className="text-xs text-gray-500">{t.date}</div>
          </div>
          <div className={
            `text-right font-medium ${
              t.status === 'up' ? 'text-green-500' :
              t.status === 'down' ? 'text-red-500' :
              'text-gray-500'
            }`
          }>
            {t.amount}
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default Transactions;
