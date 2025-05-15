import React from 'react';
import { FaDollarSign, FaUsers, FaUserPlus, FaShoppingCart } from 'react-icons/fa';

const iconMap = {
  money: <FaDollarSign className="text-white text-base" />,
  users: <FaUsers className="text-white text-base" />,
  clients: <FaUserPlus className="text-white text-base" />,
  sales: <FaShoppingCart className="text-white text-base" />,
};

const StatCard = ({
  title,
  value,
  change = '',
  iconKey = 'money',
  color = 'bg-blue-500',
}) => {
  const isPositive = typeof change === 'string' && change.trim().startsWith('+');

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow px-4 py-3 flex justify-between items-center h-[90px]">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase text-gray-500 font-medium">
          {title}
        </span>
        <span className="text-lg font-bold text-gray-900 leading-tight">{value}</span>
        {change && (
          <span
            className={`text-xs ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change}{' '}
            <span className="text-gray-400">Since last month</span>
          </span>
        )}
      </div>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center ${color}`}
      >
        {iconMap[iconKey]}
      </div>
    </div>
  );
};

export default StatCard;
