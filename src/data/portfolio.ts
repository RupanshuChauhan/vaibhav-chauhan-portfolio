import { Project, Experience, Certification, Skill, Education, SocialLink } from '@/types'

export const personalInfo = {
  name: 'Vaibhav Chauhan',
  title: 'AI/ML Engineer & Full-Stack Developer',
  bio: 'Passionate about building intelligent systems and scalable web applications. I specialize in machine learning, deep learning, and modern web technologies.',
  email: 'vaivhavchauhan2162003@gmail.com',
  phone: '+91-9012146810',
  location: 'Dehradun, Uttarakhand, India',
    resume: '/Vaibhav Resume July 2025.pdf',
  avatar: '/images/avatar.jpg'
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Vaibhav0621',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vaibhav-chauhan-21ab241bb/',
    icon: 'Linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Cyber_x_Panda',
    icon: 'Twitter'
  },
  {
    name: 'Email',
    url: 'mailto:vaivhavchauhan2162003@example.com',
    icon: 'Mail'
  }
]

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'programming', level: 'expert', icon: 'Java' },
  { name: 'JavaScript', category: 'programming', level: 'expert', icon: 'Javascript' },
  { name: 'Python', category: 'programming', level: 'advanced', icon: 'Python' },
  { name: 'PHP', category: 'programming', level: 'intermediate', icon: 'PHP' },
  { name: 'C', category: 'programming', level: 'intermediate', icon: 'C' },
  { name: 'SQL', category: 'programming', level: 'advanced', icon: 'Database' },
  { name: 'HTML', category: 'programming', level: 'expert', icon: 'Html' },
  { name: 'CSS', category: 'programming', level: 'expert', icon: 'Css' },
  
  // AI/ML & Data Science
  { name: 'Scikit-learn', category: 'ai-ml', level: 'advanced', icon: 'ScikitLearn' },
  { name: 'Pandas', category: 'ai-ml', level: 'advanced', icon: 'Pandas' },
  { name: 'NumPy', category: 'ai-ml', level: 'advanced', icon: 'Numpy' },
  { name: 'Machine Learning', category: 'ai-ml', level: 'advanced', icon: 'MachineLearning' },
  { name: 'Linear Regression', category: 'ai-ml', level: 'intermediate', icon: 'Analytics' },
  { name: 'Decision Trees', category: 'ai-ml', level: 'intermediate', icon: 'Tree' },
  { name: 'K-Means Clustering', category: 'ai-ml', level: 'intermediate', icon: 'Cluster' },
  
  // Web Frameworks & Libraries
  { name: 'React', category: 'framework', level: 'advanced', icon: 'React' },
  { name: 'Angular', category: 'framework', level: 'intermediate', icon: 'Angular' },
  { name: 'Spring Framework', category: 'framework', level: 'intermediate', icon: 'Spring' },
  { name: 'WordPress', category: 'framework', level: 'intermediate', icon: 'Wordpress' },
  
  // Databases & Tools
  { name: 'MySQL', category: 'database', level: 'advanced', icon: 'Mysql' },
  { name: 'Firebase', category: 'database', level: 'advanced', icon: 'Firebase' },
  { name: 'Database Design', category: 'database', level: 'advanced', icon: 'Database' },
  
  // Development Tools & Platforms
  { name: 'Git', category: 'tool', level: 'expert', icon: 'Git' },
  { name: 'Visual Studio Code', category: 'tool', level: 'expert', icon: 'VsCode' },
  { name: 'Postman', category: 'tool', level: 'advanced', icon: 'Postman' },
  { name: 'Google Colab', category: 'tool', level: 'advanced', icon: 'GoogleColab' },
  { name: 'Jupyter', category: 'tool', level: 'advanced', icon: 'Jupyter' },
  { name: 'Eclipse', category: 'tool', level: 'intermediate', icon: 'Eclipse' },
  { name: 'Cisco Packet Tracer', category: 'tool', level: 'intermediate', icon: 'Cisco' },
  { name: 'DaVinci Resolve', category: 'tool', level: 'intermediate', icon: 'Video' },
  { name: 'Canva', category: 'tool', level: 'intermediate', icon: 'Design' },
  
  // Specialized Concepts
  { name: 'OOP Principles', category: 'programming', level: 'expert', icon: 'Code' },
  { name: 'Web3 Fundamentals', category: 'tool', level: 'intermediate', icon: 'Blockchain' },
  { name: 'Cybersecurity', category: 'tool', level: 'intermediate', icon: 'Security' },
  { name: 'Network Security', category: 'tool', level: 'intermediate', icon: 'Network' },
  { name: 'Database Administration', category: 'database', level: 'advanced', icon: 'Database' }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bank Management System',
    description: 'Comprehensive Java-based banking application with secure transaction processing and account management.',
    longDescription: 'Developed a full-featured bank management system using Java OOP principles. Features include account creation, transaction processing, balance management, and secure user authentication with role-based access control.',
    image: '/images/projects/bank-management.jpg',
    technologies: ['Java', 'MySQL', 'Swing', 'JDBC', 'Git'],
    category: 'full-stack',
    githubUrl: 'https://github.com/Vaibhav0621/Code-Alpha-Internship',
    featured: false,
    completed: true,
    startDate: '2023-09-15',
    endDate: '2023-11-15'
  },
  {
    id: '2',
    title: 'Hotel Reservation System',
    description: 'Intelligent hotel booking platform with automated inventory management and customer service features.',
    longDescription: 'Built a comprehensive hotel reservation system with room availability tracking, automated booking confirmation, payment processing, and customer management. Implemented using Java with MySQL database integration.',
    image: '/images/projects/hotel-reservation.jpg',
    technologies: ['Java', 'MySQL', 'JavaFX', 'JDBC', 'Git'],
    category: 'full-stack',
    githubUrl: 'https://github.com/Vaibhav0621/Code-Alpha-Internship',
    featured: false,
    completed: true,
    startDate: '2023-10-01',
    endDate: '2023-11-20'
  },
  {
    id: '3',
    title: 'Kami Scan',
    // Example for your Next.js TypeScript "KamiScan" project
    description: '● Engineered "KamiScan", an AI-powered PDF summarization platform built with Next.js, TypeScript, and Google OAuth, featuring secure in-app purchases, admin access, and a modern responsive UI.',
    longDescription: 'Designed and implemented a scalable web application for instant PDF summarization using advanced AI models. Integrated Google authentication, Stripe-based payment processing, and admin privileges for vaivhavchauhan2162003@gmail.com. Developed a professional liquify navigation bar, interactive header/footer, magic button effects, and a user profile page with customizable settings.',
    image: '/images/projects/kamiscan.jpg',
    technologies: ['Next.js', 'TypeScript', 'React', 'OpenAI API', 'Google OAuth', 'Stripe', 'Tailwind CSS'],
    category: 'ai-ml',
    liveUrl: 'https://kami-scan.vercel.app/',
    githubUrl: 'https://github.com/Vaibhav0621/KamiScan',
    featured: true,
    completed: true,
    startDate: '2025-06-26',
    endDate: '2025-07-26'
  },
  {
    id: '4',
    title: 'Go Tapri',
    description: 'A modern web application for managing Tapri community features, including live status, profiles, and dashboard views.',
    longDescription: 'Go Tapri is a full-stack web app built with Next.js, TypeScript, and Drizzle ORM. It provides real-time status tracking, profile management, and dashboard analytics for Tapri communities. The project integrates advanced UI components, optimized middleware, and secure authentication workflows.',
    image: '/images/projects/go-tapri.jpg',
    technologies: ['Next.js', 'TypeScript', 'Drizzle ORM', 'React', 'SQL'],
    category: 'web-dev',
    githubUrl: 'https://github.com/Vaibhav0621/UPDATED-TAPRI',
    featured: true,
    completed: false,
    startDate: '2025-06-26',
    endDate: ''
  },
  {
    id: '5',
    title: 'Speed Demon System Optimizer',
    description: 'AI-powered Windows system optimizer with real-time performance monitoring, gaming enhancements, and predictive health analytics.',
    longDescription: 'Developed a professional-grade system optimization suite using Python, CustomTkinter, and AI modules. Features include intelligent performance suggestions, gaming mode with automatic optimizations, comprehensive system health monitoring, and predictive analytics for failure prevention. Integrated advanced UI, real-time metrics, and modular architecture for seamless user experience.',
    image: '/images/projects/speed-demon.jpg',
    technologies: ['Python', 'CustomTkinter', 'psutil', 'AI/ML', 'JSON', 'Windows'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/Vaibhav0621/Vaibhav-s-Speed-Demon',
    featured: true,
    completed: true,
    startDate: '2025-06-01',
    endDate: '2025-08-14'
  },
  {
    id: '7',
    title: 'Sound Synthesizer',
    description: 'Java-based desktop application for audio synthesis and signal processing.',
    longDescription: 'Developed a modular sound synthesizer in Java, enabling users to generate, mix, and filter audio signals. Features include real-time waveform manipulation, custom audio components, and a user-friendly interface for experimenting with sound synthesis techniques.',
    image: '/images/projects/sound-synthesizer.png',
    technologies: ['Java', 'Swing', 'OOP', 'Maven', 'Git'],
    category: 'full-stack',
    liveUrl: '', // Not applicable for desktop apps
    githubUrl: 'https://github.com/Vaibhav0621/SoundSynthesizer',
    featured: true,
    completed: true,
    startDate: '2025-06-01',
    endDate: '2025-07-01'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Go Tapri',
    position: 'Senior Full-Stack Developer/ Chief Technology Officer',
    description: 'Leading development of AI-powered web applications and managing a team of junior developers.',
    startDate: '2025-06-024',
    location: 'Hybrid',
    type: 'full-time',
    technologies: ['React', 'Node.js', 'Python', 'Git', 'Google Cloud', 'PostgreSQL'],
    achievements: [
      'Led development of their startup projects with 100% on-time delivery',
      'Improved website performance by 50% through optimization techniques',
      'Mentored 5 junior developers and established coding best practices'
    ]
  },
  {
    id: '2',
    company: 'OUTLIER AI',
    position: 'AI Quality Engineer',
    description: 'Specialized in automated quality assurance and performance optimization of large-scale AI models, implementing smart testing frameworks and intelligent model validation systems.',
    startDate: '2024-08-15',
    location: 'Remote',
    type: 'full-time',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'MLflow', 'Kubernetes', 'Docker', 'Apache Airflow', 'Weights & Biases', 'Git', 'CI/CD'],
    achievements: [
      'Developed automated ML model validation pipeline reducing manual testing time by 85%',
      'Implemented intelligent anomaly detection system achieving 97% accuracy in identifying model degradation',
      'Built smart data quality monitoring framework preventing 90% of data-related model failures',
      'Optimized distributed training infrastructure reducing compute costs by 45% while improving model convergence',
      'Created automated A/B testing framework for model deployment enabling continuous performance monitoring',
      'Established MLOps best practices resulting in 75% faster model deployment cycles'
    ]
  },
  {
    id: '3',
    company: 'CODTECH IT SOLUTIONS',
    position: 'Machine Learning Intern',
    description: 'Developed intelligent automation solutions and deployed advanced ML models for real-world applications, focusing on automated data processing and smart predictive analytics systems.',
    startDate: '2025-06-26',
    endDate: '2025-07-26',
    location: 'Dehradun, Uttarakhand, India',
    type: 'internship',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'FastAPI', 'Docker', 'Git'],
    achievements: [
      'Built automated data preprocessing pipeline reducing manual effort by 80% for client projects',
      'Developed smart recommendation system achieving 92% accuracy for e-commerce client',
      'Implemented intelligent fraud detection model with 95% precision for fintech application',
      'Created automated model deployment framework reducing deployment time from hours to minutes',
      'Optimized existing ML algorithms improving inference speed by 40% through feature engineering',
      'Delivered 3 end-to-end ML solutions from data collection to production deployment'
    ]
  },
  {
    id: '4',
    company: 'Plasmid Pvt. Ltd.',
    position: 'Java Programming Intern',
    description: 'Developed Java-based enterprise applications focusing on object-oriented programming principles and system design for real-world business solutions.',
    startDate: '2024-09-01',
    endDate: '2024-11-30',
    location: 'Remote',
    type: 'internship',
    technologies: ['Java', 'OOP', 'MySQL', 'Git', 'Eclipse', 'Spring Framework'],
    achievements: [
      'Developed comprehensive Bank Management System with secure transaction processing',
      'Built Hotel Reservation System with automated booking and inventory management',
      'Implemented intelligent chatbot systems with natural language processing capabilities',
      'Applied advanced OOP principles including inheritance, polymorphism, and method overriding',
      'Collaborated remotely with development team for code reviews and system improvements',
      'Delivered 3 production-ready Java applications meeting client specifications'
    ]
  }
]

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: '2024-10-15',
    credentialId: 'HR-REACT-2024',
    image: '/images/certifications/hackerrank-react.png',
    description: 'Certified in React development and modern frontend technologies.',
    skills: ['React', 'JavaScript', 'Frontend Development', 'Component Design']
  },
  {
    id: '2',
    name: 'Angular (Intermediate)',
    issuer: 'HackerRank',
    date: '2024-09-20',
    credentialId: 'HR-ANGULAR-2024',
    image: '/images/certifications/hackerrank-angular.png',
    description: 'Intermediate certification in Angular framework and TypeScript.',
    skills: ['Angular', 'TypeScript', 'Web Development', 'SPA Development']
  },
  {
    id: '3',
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '2024-08-10',
    credentialId: 'HR-PYTHON-2024',
    image: '/images/certifications/hackerrank-python.png',
    description: 'Basic certification in Python programming and data structures.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Programming']
  },
  {
    id: '4',
    name: 'Advanced Python Programming',
    issuer: 'ICT Academy, Tula\'s Institute',
    date: '2024-07-25',
    credentialId: 'ICT-PYTHON-ADV-2024',
    image: '/images/certifications/ict-python.png',
    description: 'Advanced Python programming concepts and applications.',
    skills: ['Python', 'Advanced Programming', 'Object-Oriented Programming', 'Data Science']
  },
  {
    id: '5',
    name: 'Java Programming Internship Certificate',
    issuer: 'Plasmid Pvt. Ltd.',
    date: '2024-11-30',
    credentialId: 'PLASMID-JAVA-2024',
    image: '/images/certifications/plasmid-java.png',
    description: 'Comprehensive Java programming internship completion certificate.',
    skills: ['Java', 'OOP', 'Enterprise Applications', 'System Design']
  },
  {
    id: '6',
    name: 'Cybersecurity Foundations Certification',
    issuer: 'Professional Training Institute',
    date: '2024-06-15',
    credentialId: 'CYBER-FOUND-2024',
    image: '/images/certifications/cybersecurity.png',
    description: 'Foundation level cybersecurity principles and best practices.',
    skills: ['Cybersecurity', 'Network Security', 'CIA Triad', 'Security Fundamentals']
  },
  {
    id: '7',
    name: 'Web3 Foundations Workshop Certification',
    issuer: 'Blockchain Education Institute',
    date: '2024-08-20',
    credentialId: 'WEB3-FOUND-2024',
    image: '/images/certifications/web3.png',
    description: 'Foundational concepts in Web3 technologies and blockchain.',
    skills: ['Web3', 'Blockchain', 'Cryptocurrency', 'Decentralized Applications']
  },
  {
    id: '8',
    name: 'Database Administration Add-on Course',
    issuer: 'Tula\'s Institute',
    date: '2024-05-30',
    credentialId: 'TULAS-DBA-2024',
    image: '/images/certifications/database-admin.png',
    description: 'Database administration concepts and practical applications.',
    skills: ['Database Administration', 'MySQL', 'Database Design', 'Data Management']
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: "Tula's Institute",
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    startDate: '2022-08-01',
    endDate: '2026-07-15',
    gpa: '6.11/10',
    description: 'Specialized in Artificial Intelligence and Machine Learning with focus on deep learning and computer vision.',
    relevant_courses: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Software Engineering'
    ]
  }
]
