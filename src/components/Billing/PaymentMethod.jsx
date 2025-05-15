import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const PaymentMethod = () => (
  <div className="bg-white dark:bg-[#0e1a39] rounded-xl p-6 shadow-md space-y-4">
    <h3 className="text-sm font-semibold text-gray-700 dark:text-white">Payment Method</h3>

    {/* Visa Card Row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
        <FaCcVisa className="text-2xl text-blue-600" />
        <span>7812&nbsp;&nbsp;2139&nbsp;&nbsp;0823&nbsp;&nbsp;XXXX</span>
      </div>
      <button className="text-xs text-blue-500 font-medium hover:underline">Edit</button>
    </div>

    {/* Mastercard Row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
        <FaCcMastercard className="text-2xl text-red-500" />
        <span>7812&nbsp;&nbsp;2139&nbsp;&nbsp;0823&nbsp;&nbsp;XXXX</span>
      </div>
      <button className="text-xs text-blue-500 font-medium hover:underline">Edit</button>
    </div>

    {/* Add New Card */}
    <button className="w-full border border-gray-300 dark:border-gray-600 text-xs py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a2a4f] transition">
      + Add New Card
    </button>
  </div>
);

export default PaymentMethod;
