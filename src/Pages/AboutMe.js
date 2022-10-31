import Shamim from "../Images/Shamim.jpg";
const AboutMe = () => {
  return (
    <div id="aboutme" className="lg:my-44  my-12">
      <div className="hero">
        <div className="hero-content w-full flex-col justify-between lg:flex-row-reverse">
          <img className="" src={Shamim} class="lg:max-w-sm rounded-lg" alt="" />

          <div className="max-w-2xl mr-0 lg:mr-16">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4"><span className="text-primary">ABOUT</span> ME</h1>
            <p className="text-xl leading-relaxed mb-5">
              Hello, I'm Shamim. I'm an enthusiastic programmer working on Front End Development for more than 1 year. I'm passionate about coding to make people's daily life more easier. My core
              skill is based on JavaScript and I love to do most of the things
              using JavaScript. I'm working with React, JavaScript, HTML, and
              CSS and familiarity with back-end technologies such as NodeJS and
              ExpressJS. I love to make the web more open to the world.I am
              available for any kind of job opportunity that suits my interests.
            </p>
            <a
              href="https://drive.google.com/file/d/12-aEMW0MzKnlVjZ-jwjHpNeWNabf3dRJ/view?usp=share_link"
              target="_blank"
              className="btn btn-primary text-black mr-2"
              rel="noreferrer"
            >
              Get Resume
            </a>

            <a
              href="/"
              target="_blank"
              className="btn btn-primary hover:text-white btn-outline text-white"
              rel="noreferrer"
            >
              My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
