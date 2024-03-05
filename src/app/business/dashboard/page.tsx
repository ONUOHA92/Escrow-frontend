import React from "react";
import BusinessHomeTemplate from "@/components/template/SellerDashboard/sellerHome";
import BusinessLayout from "@/components/ui/layouts/businesslayout";

const Dashboard = () => {
  return (
    <BusinessLayout>
      <BusinessHomeTemplate />;
    </BusinessLayout>
  );
};

export default Dashboard;
