"use client";
import React from "react";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/heading";
import AdminSidebar from "./sidebar/AdminSidebar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Sticky Learning - Admin"
          description="Sticky Learning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            {/* <DashboardHero isDashboard={true} /> */}
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
