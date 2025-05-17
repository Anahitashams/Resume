import React from "react";
import Sidebar from "@/components/Sidebar";
import Aboutme from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Call from "@/components/Call";
import Courses from "@/components/Courses";

function page() {
  return (
    <div>
      <Sidebar />
      <Aboutme />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Projects />
      <Courses />
      <Call />
    </div>
  );
}

export default page;
