import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const projects = [
    {
      title: 'GreenPath Login System',
      desc: 'A robust authentication system utilizing a custom MySQL schema, complete with secure routing and data handling.',
      tech: ['Node.js', 'Express', 'MySQL', 'Nodemailer'],
      github: 'https://github.com/VanithaLakshminN/GreenPath'
    },
    {
      title: 'My Portfolio',
      desc: 'A modern, fully responsive personal portfolio featuring smooth scroll animations and a connected contact database.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/VanithaLakshminN/MyPortfolio'
    },
    {
      title: 'HeathCare Application',
      desc: 'Built a digital telemedicine platform to connect rural families in Nabha with doctors, medicines, and health info via mobile or local centers.',
      tech: [],
      github: 'https://healthcare601.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}><span className="text-accent">03.</span> Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className={`p-6 rounded transition ${isDark ? 'bg-slate-800 border border-slate-700 hover:border-accent' : 'bg-slate-100 border border-slate-300 hover:border-blue-600'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{proj.title}</h3>
              <a href={proj.github} target="_blank" rel="noreferrer" className={`transition ${isDark ? 'text-slate-300 hover:text-accent' : 'text-slate-600 hover:text-blue-600'}`}><FaGithub size={24}/></a>
            </div>
            <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, j) => <span key={j} className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-darkBg text-accent' : 'bg-blue-100 text-blue-700'}`}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;