const projects = [
  { name: 'Chakra Soft UI Version', budget: '$14,000', status: 'Working', progress: 60 },
  { name: 'Add Progress Track', budget: '$3,000', status: 'Canceled', progress: 10 },
  { name: 'Fix Platform Errors', budget: 'Not set', status: 'Done', progress: 100 },
  { name: 'Launch our Mobile App', budget: '$32,000', status: 'Done', progress: 100 },
  { name: 'Add the New Pricing Page', budget: '$400', status: 'Working', progress: 25 },
];

const ProjectsTable = () => (
  <div className="bg-white dark:bg-[#0e1a39] p-1 md:p-6 rounded-xl shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Projects</h2>
      <span className="text-sm text-green-400">● 30 done this month</span>
    </div>
    <table className="w-full text-sm">
      <thead className="text-gray-500 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-700">
        <tr>{['Companies', 'Budget', 'Status', 'Completion'].map((h, i) => <th key={i} className="pb-2 text-left">{h}</th>)}</tr>
      </thead>
      <tbody>
        {projects.map((p, i) => (
          <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
            <td className="py-3">{p.name}</td>
            <td>{p.budget}</td>
            <td>{p.status}</td>
            <td>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProjectsTable;
