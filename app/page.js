import React from "react";
import Aboutme from "@/components/Aboutme";
import Skill from "@/components/Projects";
import Education from "@/components/Education";
import Projects from "@/components/Skill";
import Language from "@/components/Language";
import Courses from "@/components/Courses";
import Call from "@/components/Call";
import Home from "@/components/Home";
function Love() {
  return (
    <div>
      <Home />
      <Aboutme />
      <Projects />
      <Skill />
      <Courses />
      <Language />
      <Education />
      <Call />
    </div>
  );
}

export default Love;
