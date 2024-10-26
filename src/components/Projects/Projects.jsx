import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="We Chat!"
          main="Developed a real-time messaging application with user authentication and Bcrypt - based security to ensure safe and reliable communication, easy chat access and effective communication."
          Demoo1= "https://wechat-rx4x.onrender.com/"
          SourceCode1= "https://github.com/Vmansi115/WeChat-"        
        />
        <ProjectCard
          title="Gemini Pro"
          main="Designed and implemented a React-based application mimicking Google Gemini; an AI application to solve the real problems and issues of user, focused on a sleek, intuitive interface for project and task management."
          Demoo1= "https://gemini-pro-lycr-2ivg74vm8-mansis-projects-b11b96ff.vercel.app/"
          SourceCode1= "https://github.com/Vmansi115/GeminiPro"
        
        />
        <ProjectCard
          title="Customer Segmentation Analysis"
          main="Developed a customer segmentation model to enhance marketing strategies and increase firm profitability."
          Demoo1="https://github.com/Vmansi115/Customer_Segmentation_Analysis"
          SourceCode1="https://github.com/Vmansi115/Customer_Segmentation_Analysis"
        
        />
      </div>
    </div>
  );
};

export default Projects;
