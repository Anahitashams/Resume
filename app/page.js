import React from "react";
import Aboutme from "@/components/Aboutme";
import Skill from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Skill";
import Courses from "@/components/Courses";
// import Hook from "./hook/Hook";
function page() {
  return (
    <div>
      {/* <Hook /> */}

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
