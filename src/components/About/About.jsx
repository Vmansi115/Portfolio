
import AboutImg from "../../assets/1.avif";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a Frontend Developer, I specialize in creating interactive, user-friendly, and visually appealing interfaces that deliver seamless experiences across devices. With a solid background in HTML, CSS, JavaScript, and modern frameworks like React, I bring designs to life with precision, responsiveness, and performance. I’m passionate about leveraging UI/UX principles and following web standards to craft products that are both accessible and engaging.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a Backend Developer, I’m focused on building secure, efficient, and scalable server-side solutions that power modern web applications. With expertise in languages like Python, Node.js alongside experience with databases like MySQL and MongoDB, I specialize in managing databases, and optimizing backend performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Aspiring software developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I specialize in designing and developing versatile, high-quality software solutions that solve complex problems and drive value. Proficient in languages like Python, JavaScript, and C++, I bring technical expertise and a keen eye for detail to each project, ensuring both performance and maintainability. My approach involves full-cycle development—from planning and design to testing, deployment, and ongoing maintenance—to create resilient applications that meet real-world needs.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
