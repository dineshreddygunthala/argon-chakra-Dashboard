const cards = [
  { label: 'Salary', value: '+$2000', icon: '💼' },
  { label: 'Paypal', value: '$455.00', icon: '💳' },
];

const InfoCards = () => (
  <div className="flex flex-col md:flex-row gap-4">
    {cards.map((card, idx) => (
      <div key={idx} className="flex-1 bg-white dark:bg-[#0e1a39] rounded-xl p-4 shadow">
        <div className="text-3xl">{card.icon}</div>
        <div className="mt-2 text-sm text-gray-500">{card.label}</div>
        <div className="text-lg font-bold dark:text-gray-100">{card.value}</div>
      </div>
    ))}
  </div>
);
export default InfoCards;
