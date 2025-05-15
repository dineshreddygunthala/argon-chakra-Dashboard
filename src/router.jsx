import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Sidebar from './components/Sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50 dark:bg-[#0f1535] min-h-screen p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
