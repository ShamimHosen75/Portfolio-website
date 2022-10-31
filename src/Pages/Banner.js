import TypewriterComponent from "typewriter-effect";
const Banner = () => {
  return (
    <div id="home" className="hero lg:mb-32">
      <div className="hero-content w-full mx-auto flex-col justify-between lg:flex-row">
        <div className="max-w-2xl">
          <p className="text-3xl">Hello, I'm</p>
          <h1 className="lg:text-6xl text-4xl font-extrabold my-3">
            Billal Hosen <span className="text-primary">Shamim</span>
          </h1>

          <div className="text-3xl leading-relaxed mb-5">
            <span className="font-semibold text-primary">
              <TypewriterComponent
                options={{
                  strings: ["Front End Developer"],
                  deleteSpeed: 50,
                  pauseFor: 500,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="mb-4">
            <ul className="lg:flex mb-2 text-2xl">
              <li className="mr-1">Programmer | </li>
              <li className="mr-1"> Web Developer | </li>
              <li>WordPress Developer</li>
            </ul>
          </div>
          <a
            href="https://drive.google.com/file/d/12-aEMW0MzKnlVjZ-jwjHpNeWNabf3dRJ/view?usp=share_link"
            target="_blank"
            className="btn btn-primary text-black mr-3 mt-3"
            rel="noreferrer"
          >
            Hire Me
          </a>

          <a
            href="/"
            target="_blank"
            className="btn btn-primary hover:text-white btn-outline text-white"
            rel="noreferrer"
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
