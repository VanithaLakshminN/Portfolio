import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'React', 'Node.js', 'GitHub', 'VS Code'];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-10"><span className="text-accent">02.</span> Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <motion.div key={i} whileHover={{ scale: 1.1 }} className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-accent font-medium shadow-lg">
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;