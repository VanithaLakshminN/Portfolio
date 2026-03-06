import { motion } from 'framer-motion';

const Achievements = () => {
  const awards = ["SIH Hackathon Winner", "Deloitte Data Analytics Certificate", "EY Microsoft AI Skills Passport"];

  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold mb-10"><span className="text-accent">04.</span> Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((award, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg text-center">
            <p className="text-lg font-semibold text-white">{award}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Achievements;