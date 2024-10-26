import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-[#771d7a] font-bold bg-[#fcfaec]">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <FaNodeJs color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-gray-300 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-[#f7f4e2] bg-opacity-45 mt-4 rounded-lg p-4 items-center text-[#dc73de]">
            <span className="text-[#771d7a]">
              <h2 className="leading-tight">Technical Content Writer</h2>
              <p className="text-sm leading-tight font-thin">
                July 2023 - June 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as a Content Writer</li>
                <li>- Got published near about 10 articles on the GFG</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-[#faf6de] bg-opacity-45 mt-4 rounded-lg  p-4 items-center text-[#dc73de]">
            <span className="text-[#771d7a]">
              <h2 className="leading-tight">Web Developer, The Sparks Foundation</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Oct 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as a Web Developer.</li>
                <li>- Web Developer Intern</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
