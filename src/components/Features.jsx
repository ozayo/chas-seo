import { FaBriefcase, FaWindowMaximize, FaDatabase, FaRobot, FaFileAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Vite & React",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaBriefcase size={24} className="text-white" />,
  },
  {
    title: "Dynamic Sitemap",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaWindowMaximize size={24} className="text-white" />,
  },
  {
    title: "Robots.txt",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaDatabase size={24} className="text-white" />,
  },
  {
    title: "Metadata & Open Graph-tags",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaRobot size={24} className="text-white" />,
  },
  {
    title: "SEO Friendly",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaFileAlt size={24} className="text-white" />,
  },
  {
    title: "Google Analytics",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <FaUsers size={24} className="text-white" />,
  },
];

const Features = () => {
  return (
    <section className="mt-16 md:mt-0 mb-20 pb-16">
      {/* Heading */}
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          SEO & Mobile Friendly
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium praesentium accusamus ullam.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            {/* Icon */}
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            {/* Title & Description */}
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
