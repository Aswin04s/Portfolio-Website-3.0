export const projectsData = [
  {
    id: 1,
    title: "WinTech Course Registration & Student Management System",
    description: "Full-stack course management platform with Spring Boot backend and React frontend, deployed on AWS with comprehensive student registration and enrollment tracking features.",
    image: "assets/images/projects/course-registration.png",
    techStack: ["Spring Boot", "React.js", "MySQL", "AWS EC2", "AWS RDS", "REST APIs"],
    features: [
      "RESTful API for course management with Spring Boot",
      "Student registration and enrollment tracking system",
      "Dynamic forms with React Router navigation",
      "MySQL database with optimized schema design",
      "AWS deployment with EC2 and RDS integration",
      "Comprehensive error handling and validation"
    ],
    liveDemo: "https://course-registration-frontend.vercel.app/",
    githubRepo: "https://github.com/aswin/course-registration",
    category: "fullstack",
    duration: "August 2025",
    role: "Full-Stack Developer"
  },
  {
    id: 2,
    title: "Appu's Aquarium - Website Design",
    description: "Responsive aquarium showcase website featuring modern UI design, interactive components, and seamless user experience built with React and Tailwind CSS.",
    image: "/assets/images/projects/aquarium.png",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design"],
    features: [
      "Responsive design with mobile-first Tailwind CSS approach",
      "Interactive slideshow component with smooth transitions",
      "Comprehensive fish species catalog with detailed information",
      "Contact form with database integration considerations",
      "Optimized images and performance",
      "Cross-browser compatibility"
    ],
    liveDemo: "https://appus-aquarium.vercel.app",
    githubRepo: "https://github.com/aswin/aquarium-website",
    category: "frontend",
    duration: "May 2025",
    role: "Frontend Developer"
  },
  {
    id: 3,
    title: "Viral Genome Classifier",
    description: "AI-powered hybrid LSTM-Transformer model for classifying viral genomes (MERS, SARS, COVID-19, Ebola, Dengue) achieving 89% accuracy with robust multiclass classification.",
    image: "/assets/images/projects/genome-classifier.png",
    techStack: ["Python", "TensorFlow", "LSTM", "Transformer", "SMOTEN", "Machine Learning"],
    features: [
      "Hybrid LSTM-Transformer architecture for sequence classification",
      "89% accuracy in viral genome classification",
      "SMOTEN oversampling to handle class imbalance",
      "Processes multiple viral genomes (MERS, SARS, COVID-19, Ebola, Dengue)",
      "Robust performance across different viral families",
      "Comprehensive model evaluation and validation"
    ],
    githubRepo: "https://github.com/aswin/genome-classifier",
    category: "ai",
    duration: "January 2025 - May 2025",
    role: ""
  }
];

// Categories for filtering
export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'ai', label: 'AI/ML' }
];