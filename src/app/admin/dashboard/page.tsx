import React from "react";
import AdminHomeTemplate from "@/components/template/AdminDashboard/adminHome";
import AdminLayout from "@/components/ui/layouts/adminlayout";

const AdminHomePage = () => {
  return (
    <AdminLayout>
      <AdminHomeTemplate />
    </AdminLayout>
  );
};

export default AdminHomePage;
