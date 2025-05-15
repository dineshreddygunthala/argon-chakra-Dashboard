import React from "react";
import CreditCard from "../components/Billing/CreditCard";
import InfoCards from "../components/Billing/InfoCards";
import PaymentMethod from "../components/Billing/PaymentMethod";
import Invoices from "../components/Billing/Invoices";
import BillingInfo from "../components/Billing/BillingInfo";
import Transactions from "../components/Billing/Transactions";

const Billing = () => {
  return (
    <div className="px-4 py-3 md:px-6 md:py-5 bg-gray-50 dark:bg-[#0b1437] min-h-screen w-full space-y-4">
      
      {/* Row 1: Card + InfoCards + Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <CreditCard />
        </div>
        <div className="lg:col-span-4">
          <InfoCards />
        </div>
        <div className="lg:col-span-4">
          <Invoices />
        </div>
      </div>

      {/* Row 2: Payment Method (full width) */}
      <div className="w-full">
        <PaymentMethod />
      </div>

      {/* Row 3: Billing Info + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          <BillingInfo />
        </div>
        <div className="lg:col-span-4">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Billing;
