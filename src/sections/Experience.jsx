import { experienceData } from '../data/experience';
import SectionTitle from '../components/common/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and contributions"
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.length > 0 ? (
            <div className="space-y-8">
              {experienceData.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💼</div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Experience section coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;