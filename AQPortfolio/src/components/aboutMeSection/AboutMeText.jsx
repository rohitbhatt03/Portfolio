import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Rohit, a passionate AI enthusiast and software developer with a strong foundation in C++ and machine learning. I specialize in developing intelligent systems, with hands-on experience in neural network-based projects like chess engines and seizure detection using EEG data. I’ve also led real-time object detection initiatives and contributed to my university’s tech community by organizing coding events and hackathons. Currently pursuing a B.Tech in Computer Science and Engineering, I’m driven by a love for innovation, continuous learning, and building impactful technology solutions that solve real-world problems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
