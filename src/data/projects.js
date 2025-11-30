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
    image: "/assets/images/projects/APPU-AQUARIUM.png",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design", "HTML5"],
    features: [
      "Responsive design with mobile-first Tailwind CSS approach",
      "Interactive slideshow component with smooth transitions",
      "Comprehensive fish species catalog with detailed information",
      "Contact form with database integration considerations",
      "Optimized images and performance",
      "Cross-browser compatibility"
    ],
    liveDemo: "https://appu-s-aquarium-deployment.vercel.app/",
    githubRepo: "https://github.com/Aswin04s/Appu-s-Aquarium-Deployment",
    category: "frontend",
    duration: "May 2025",
    role: "Frontend Developer"
  }, {
    "id": 3,
    "title": "VirtueHire - Smart Recruitment Platform",
    "description": "A comprehensive Spring Boot backend for an HR recruitment platform that streamlines candidate assessment, HR management, and hiring workflows with multi-role authentication and payment integration.",
    "image": "/assets/images/projects/virtue-hire.png",
    "techStack": ["Spring Boot", "Java 17", "Spring Data JPA", "MySQL", "REST APIs", "Maven", "Thymeleaf", "Spring Security", "Hibernate"],
    "features": [
      "Multi-role authentication system (Admin, HR, Candidate)",
      "Candidate assessment with 3 difficulty levels",
      "File upload for resumes and ID proofs",
      "Payment integration for subscription plans",
      "Admin dashboard for platform oversight",
      "HR candidate search and filtering",
      "Question bank management system"
    ],
    "liveDemo": "",
    "githubRepo": "https://github.com/Aswin04s/Virtue-Hire-Backend-Admin-Hr-Candidate-",
    "category": "backend",
    "duration": "October 2024 - Present",
    "role": "Web Developer Intern"
  },
  {
    id: 4,
    title: "DailySpark Inspirational Quote Fetcher",
    description: "A React app that fetches random inspirational quotes from a free API to inspire users daily. It uses React’s useState hook for state management and Tailwind CSS for a clean, responsive UI. Users click a button to get new quotes and see how many they’ve read, promoting mindfulness and positivity.",
    image: "/assets/images/projects/daily-spark.png",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design", "REST API"],
    features: [
      "Fetches random inspirational quotes from external API",
      "Real-time quote display with smooth state transitions",
      "Interactive counter tracking number of quotes read",
      "Responsive design with gradient background styling",
      "Clean and modern user interface with Tailwind CSS",
      "One-click functionality for instant new quotes",
      "Mobile-friendly layout that works on all devices"
    ],
    liveDemo: "https://daily-spark-inspirational-quote-fet.vercel.app/",
    githubRepo: "https://github.com/Aswin04s/Daily-Spark-Inspirational-Quote-Fetcher",
    category: "frontend",
    duration: "June 2025",
    role: ""
  }, {
    id: 5,
    "title": "NeighborWatch - Community Safety Platform",
    "description": "Digital neighborhood watch system that bridges the gap between community concerns and municipal action. Enables residents to report issues, track resolutions, and maintain safer neighborhoods through transparent collaboration.",
    "image": "/assets/images/projects/Neighborhood.png",
    "techStack": [  
      "Spring Boot 3.5.7",
      "Java 17",
      "MySQL Database",
      "Spring Data JPA",
      "Thymeleaf Templates",
      "Bootstrap 5.3.0"
    ],
    "features": [
      "Multi-category Issue Reporting System",
      "Real-time Status Tracking with Visual Indicators",
      "Priority-based Workflow Management",
      "Advanced Search & Filtering by Location/Type/Status",
      "Interactive Dashboard with Statistics",
      "Role-based Access Control Ready",
      "Mobile-Responsive Community Interface",
      "RESTful API Architecture"
    ],
    "githubRepo": "https://github.com/Aswin04s/NeighborWatch-",
    "category": "Civic Tech & Community Platform",
    "duration": "September 2025",
    "role": "backend"
  }, {
    id: 6,
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