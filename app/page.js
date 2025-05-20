import React from "react";
import Aboutme from "@/components/Aboutme";
import Skill from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Skill";
import Courses from "@/components/Courses";
import Language from "@/components/Language";
function page() {
  return (
    <div>
      <Aboutme />
      <Projects />
      <Skill />
      <Courses />
      <Language />
      <Experience />
      <Education />
    </div>
  );
}

export default page;
