import React from "react";
import AllUsersTemplate from "@/components/template/AdminDashboard/users";
import AdminLayout from "@/components/ui/layouts/adminlayout";

const UsersPage = () => {
  return (
    <AdminLayout>
      <AllUsersTemplate />
    </AdminLayout>
  );
};

export default UsersPage;
