"use client";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import CreateCourse from "../../components/Course/CreateCourse";
import Heading from "../../utils/heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Sticky Learning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
