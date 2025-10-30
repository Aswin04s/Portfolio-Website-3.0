import { skillsData } from '../data/skills';
import SectionTitle from '../components/common/SectionTitle';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with"
        />

        <div className="max-w-7xl mx-auto">
          {/* Frontend Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Frontend Development
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skillsData.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Backend Development
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tools & Technologies
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skillsData.tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;