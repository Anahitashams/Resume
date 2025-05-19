import React from "react";
import Sidebar from "@/components/Sidebar";
import Aboutme from "@/components/Aboutme";
import Skill from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Skill";
import Call from "@/components/Call";
import Courses from "@/components/Courses";
import Hook from "./hook/Hook";
function page() {
  return (
    <div>
      <Hook />

      <Aboutme />
      <Skill />
      <Projects />
      <Courses />
      <Experience />
      <Education />
    </div>
  );
}

export default page;
