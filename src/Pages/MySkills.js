import React from "react";
import skills from "../Images/skills.png";
const MySkills = () => {
  return (
    <div className="lg:mb-32">
      <h1 className="lg:text-4xl text-3xl font-bold mb-6">MY <span className="text-primary">SKILLS</span></h1>
      <div class="card lg:card-side bg-base-300 shadow-3xl">
        <figure>
          <img src={skills} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="text-xl mb-4 mt-12">
            <span className="text-2xl font-bold text-primary">Expertise</span> : HTML5, CSS3,
            Bootstrap5, JavaScript, ES6, REST API, ReactJS, React-Router, React-
            Bootstrap, Authentication and Tailwind CSS.
          </h2>
          <h2 class="text-xl mb-4">
            <span className="text-2xl font-bold text-primary">Comfortable</span> : Node JS,
            MongoDB, Express JS, JWT,Payment Method,React Query and React Hook
            Form.
          </h2>
          <h2 class="text-xl mb-4">
            <span className="text-2xl font-bold text-primary">Familiar</span> : TypeScript, React Redux Toolkit, NextJs
          </h2>
          <h2 class="text-xl mb-4">
            <span className="text-2xl font-bold text-primary">Tools</span> : GitHub,
            Firebase, Netlify, Heroku, VS Code, And Chrome Dev Tool
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
