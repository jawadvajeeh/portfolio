import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

const socials = [
	{
		name: 'GitHub',
		href: 'https://github.com/jawadvajeeh',
		icon: <FaGithub className="text-white" />,
		bgColor: 'bg-[#181717]', // GitHub black
	  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jawadvajeeh',
    icon: <FaLinkedin className="text-white" />,
    bgColor: 'bg-[#0077B5]', // LinkedIn blue
  },
  {
    name: 'Substack',
    href: 'https://substack.com/@jawadvajeeh',
    icon: <SiSubstack className="text-white" />,
    bgColor: 'bg-[#FF6719]', // Substack orange
  },
  
];

const Socials = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
      {socials.map(({ name, href, icon, bgColor }) => (
		<a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium ${bgColor}`}
        >
		  <span>{name}</span>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
