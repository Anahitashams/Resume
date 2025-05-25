import React from "react";
import Aboutme from "@/components/Aboutme";
import Skill from "@/components/Projects";
import Education from "@/components/Education";
import Projects from "@/components/Skill";
import Language from "@/components/Language";
import Courses from "@/components/Courses";
import Home from "@/components/Home";
// import Clouds from "@/components/Clouds";

function Love() {
  return (
    <div>
      {/* <Clouds /> */}
      <Home />
      <Aboutme />
      <Projects />
      <Skill />
      <Courses />
      <Language />
      <Education />
    </div>
  );
}

export default Love;
