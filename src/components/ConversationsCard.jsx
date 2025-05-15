// src/components/ConversationsCard.jsx
import React from "react";

const ConversationsCard = () => {
  const messages = [
    { name: "Esthera Jackson", message: "Hi! I need more informations...", image: "https://i.pravatar.cc/40?img=1" },
    { name: "Esthera Jackson", message: "Awesome work, can you change...", image: "https://i.pravatar.cc/40?img=2" },
    { name: "Esthera Jackson", message: "Have a great afternoon...", image: "https://i.pravatar.cc/40?img=3" },
    { name: "Esthera Jackson", message: "About files I can...", image: "https://i.pravatar.cc/40?img=4" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Conversations</h3>
      <ul className="space-y-4">
        {messages.map((msg, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={msg.image} alt={msg.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{msg.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{msg.message}</p>
              </div>
            </div>
            <button className="text-blue-600 dark:text-blue-400 text-xs font-semibold">REPLY</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationsCard;
