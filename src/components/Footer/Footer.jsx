
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-gray-300 text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Connect!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          vermamk129@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href = "https://www.linkedin.com/in/mansi-verma-24375a229/">
          linkedin.com/in/mansi-verma-24375a229/
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href = "https://github.com/Vmansi115">
          github.com/Vmansi115
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
