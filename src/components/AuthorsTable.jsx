const authors = [
  { name: 'Esthera Jackson', email: 'esthera@simmmple.com', role: 'Manager', dept: 'Organization', status: 'Online', date: '14/06/21' },
  { name: 'Alexa Liras', email: 'alexa@simmmple.com', role: 'Programmer', dept: 'Developer', status: 'Offline', date: '14/06/21' },
  { name: 'Laurent Michael', email: 'laurent@simmmple.com', role: 'Executive', dept: 'Projects', status: 'Online', date: '14/06/21' },
  { name: 'Fredurdo Hill', email: 'fredurdo@simmmple.com', role: 'Manager', dept: 'Organization', status: 'Online', date: '14/06/21' },
  { name: 'Daniel Thomas', email: 'daniel@simmmple.com', role: 'Programmer', dept: 'Developer', status: 'Offline', date: '14/06/21' },
  { name: 'Mark Wilson', email: 'mark@simmmple.com', role: 'Designer', dept: 'UI/UX Design', status: 'Offline', date: '14/06/21' },
];

const AuthorsTable = () => (
  <div className="bg-white dark:bg-[#0e1a39] p-1 md:p-6 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Authors Table</h2>
    <table className="w-full text-sm">
      <thead className="text-gray-500 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-700">
        <tr>
          {['Author', 'Function', 'Status', 'Employed', 'Actions'].map((h, i) => (
            <th key={i} className={`pb-2 text-left ${i === 4 && 'text-right'}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {authors.map((a, i) => (
          <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
            <td className="py-3">
              <div>{a.name}</div>
              <div className="text-xs text-gray-500">{a.email}</div>
            </td>
            <td>
              <div className="font-medium">{a.role}</div>
              <div className="text-xs text-gray-500">{a.dept}</div>
            </td>
            <td>
              <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${a.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>
                {a.status}
              </span>
            </td>
            <td>{a.date}</td>
            <td className="text-right text-blue-500 cursor-pointer">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AuthorsTable;
