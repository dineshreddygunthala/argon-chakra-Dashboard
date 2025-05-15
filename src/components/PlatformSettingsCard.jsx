// src/components/PlatformSettingsCard.jsx
import React from "react";

const PlatformSettingsCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Platform Settings</h3>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Account</h4>
        <div className="space-y-2 mt-2">
          <ToggleOption label="Email me when someone follows me" />
          <ToggleOption label="Email me when someone answers on my post" />
          <ToggleOption label="Email me when someone mentions me" />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Application</h4>
        <div className="space-y-2 mt-2">
          <ToggleOption label="New launches and projects" />
          <ToggleOption label="Monthly product updates" />
          <ToggleOption label="Subscribe to newsletter" />
        </div>
      </div>
    </div>
  );
};

const ToggleOption = ({ label }) => (
  <label className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
    {label}
    <input type="checkbox" className="form-checkbox text-blue-600 rounded focus:ring-blue-500" />
  </label>
);

export default PlatformSettingsCard;
