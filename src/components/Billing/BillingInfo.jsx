const BillingCard = () => (
    
  <div className="bg-white dark:bg-[#0e1a39] dark:text-gray-50 p-4 rounded-xl shadow text-sm">
    <div className="font-semibold mb-2">Oliver Liam</div>
    <div className="text-gray-500">Company: Viking Burrito</div>
    <div className="text-gray-500">Email: oliver@burrito.com</div>
    <div className="text-gray-500 mb-2">VAT Number: FRB1235476</div>
    <div className="flex justify-end gap-2">
      <button className="text-red-500 text-xs">Delete</button>
      <button className="text-blue-500 text-xs">Edit</button>
    </div>
  </div>
);

const BillingInfo = () => (
  <div className="space-y-4">
    <BillingCard />
    <BillingCard />
    <BillingCard />
  </div>
);
export default BillingInfo;
