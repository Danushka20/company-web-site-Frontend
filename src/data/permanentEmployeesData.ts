const permanentEmployees = [
  // Chairman
  {
    id: "chairman-001",
    name: "Mr. Rajendra Silva",
    position: "Chairman",
    department: "Executive",
    level: "Chairman",
    joinDate: "2015",
    experience: "25+ years",
    specialization: "Business Strategy & Leadership",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop",
    skills: ["Strategic Planning", "Business Development", "Leadership"],
    about:
      "Visionary leader with extensive experience in technology and business management. Rajendra has successfully guided the company from its inception to becoming a leading innovator in IoT and software solutions.",
    email: "rajendra.silva@skysmart.lk",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // CEO
  {
    id: "ceo-001",
    name: "Ms. Kavya Deshmukh",
    position: "Chief Executive Officer",
    department: "Executive",
    level: "CEO",
    joinDate: "2016",
    experience: "20+ years",
    specialization: "Technology & Operations",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop",
    skills: ["Operations", "Technology Strategy", "Team Management"],
    about:
      "Dynamic CEO leading our company's vision into the future. Kavya brings deep expertise in technology operations and has been instrumental in scaling our global presence.",
    email: "kavya.deshmukh@skysmart.lk",
    phone: "+94 77 123 4568",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // Directors
  {
    id: "director-001",
    name: "Dr. Anil Patel",
    position: "Director - Software Development",
    department: "Software Development",
    level: "Directors",
    joinDate: "2017",
    experience: "18+ years",
    specialization: "Software Architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=700&fit=crop",
    skills: ["Software Architecture", "Cloud Computing", "Agile Leadership"],
    about:
      "Expert in software architecture and cloud solutions. Dr. Patel oversees all software development initiatives and ensures technical excellence across all projects.",
    email: "anil.patel@skysmart.lk",
    phone: "+94 77 123 4569",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "director-002",
    name: "Eng. Priya Sharma",
    position: "Director - IoT Solutions",
    department: "IoT & Embedded Systems",
    level: "Directors",
    joinDate: "2017",
    experience: "17+ years",
    specialization: "IoT & Embedded Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=700&fit=crop",
    skills: ["IoT Architecture", "Embedded Systems", "Hardware Integration"],
    about:
      "Leading engineer in IoT and embedded systems. Priya directs the innovation of IoT solutions and ensures seamless hardware-software integration.",
    email: "priya.sharma@skysmart.lk",
    phone: "+94 77 123 4570",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // Managers
  {
    id: "manager-001",
    name: "John Mitchell",
    position: "Project Manager - Software",
    department: "Software Development",
    level: "Managers",
    joinDate: "2018",
    experience: "12+ years",
    specialization: "Project Management",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop",
    skills: ["Agile", "Project Management", "Team Coordination"],
    about:
      "Experienced project manager ensuring timely delivery of software projects. John excels in stakeholder management and team coordination.",
    email: "john.mitchell@skysmart.lk",
    phone: "+94 77 123 4571",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "manager-002",
    name: "Sarah Johnson",
    position: "Technical Manager - IoT",
    department: "IoT & Embedded Systems",
    level: "Managers",
    joinDate: "2019",
    experience: "11+ years",
    specialization: "Technical Management",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop",
    skills: ["Technical Leadership", "IoT Implementation", "Quality Assurance"],
    about:
      "Technical manager overseeing IoT project implementations. Sarah ensures high quality standards and successful project delivery.",
    email: "sarah.johnson@skysmart.lk",
    phone: "+94 77 123 4572",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "manager-003",
    name: "Michael Chen",
    position: "HR Manager",
    department: "Human Resources",
    level: "Managers",
    joinDate: "2018",
    experience: "10+ years",
    specialization: "Human Resources",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=700&fit=crop",
    skills: ["Talent Management", "Recruitment", "Employee Relations"],
    about:
      "HR manager focused on building a strong company culture and attracting top talent.",
    email: "michael.chen@skysmart.lk",
    phone: "+94 77 123 4573",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // Supervisors/Team Leaders
  {
    id: "supervisor-001",
    name: "David Rodriguez",
    position: "Team Lead - Backend Development",
    department: "Software Development",
    level: "Supervisor/Team Leader",
    joinDate: "2020",
    experience: "8+ years",
    specialization: "Backend Development",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop",
    skills: ["Backend Development", "Database Design", "Team Leadership"],
    about:
      "Skilled backend developer and team lead. David mentors junior developers and ensures code quality standards.",
    email: "david.rodriguez@skysmart.lk",
    phone: "+94 77 123 4574",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "supervisor-002",
    name: "Emily Watson",
    position: "Team Lead - Frontend Development",
    department: "Software Development",
    level: "Supervisor/Team Leader",
    joinDate: "2020",
    experience: "8+ years",
    specialization: "Frontend Development",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=700&fit=crop",
    skills: ["Frontend Development", "UI/UX", "React", "Leadership"],
    about:
      "Creative frontend developer leading the UI/UX team. Emily ensures intuitive and beautiful user interfaces across all products.",
    email: "emily.watson@skysmart.lk",
    phone: "+94 77 123 4575",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "supervisor-003",
    name: "Rajesh Kumar",
    position: "Supervisor - IoT Systems",
    department: "IoT & Embedded Systems",
    level: "Supervisor/Team Leader",
    joinDate: "2020",
    experience: "9+ years",
    specialization: "IoT Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=700&fit=crop",
    skills: ["IoT Systems", "Microcontrollers", "System Integration"],
    about:
      "Expert in IoT systems and microcontroller programming. Rajesh supervises the IoT development team.",
    email: "rajesh.kumar@skysmart.lk",
    phone: "+94 77 123 4576",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // Senior Employees
  {
    id: "senior-001",
    name: "Lisa Anderson",
    position: "Senior Software Engineer",
    department: "Software Development",
    level: "Senior Employee",
    joinDate: "2019",
    experience: "7+ years",
    specialization: "Full Stack Development",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop",
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    about:
      "Experienced full-stack developer with strong architecture and design skills. Lisa mentors junior team members.",
    email: "lisa.anderson@skysmart.lk",
    phone: "+94 77 123 4577",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "senior-002",
    name: "James Thompson",
    position: "Senior IoT Engineer",
    department: "IoT & Embedded Systems",
    level: "Senior Employee",
    joinDate: "2019",
    experience: "8+ years",
    specialization: "Embedded Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop",
    skills: ["Embedded C", "MQTT", "Arduino", "Raspberry Pi"],
    about:
      "Senior embedded systems engineer with expertise in IoT protocols and microcontroller programming.",
    email: "james.thompson@skysmart.lk",
    phone: "+94 77 123 4578",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "senior-003",
    name: "Amanda Lee",
    position: "Senior QA Engineer",
    department: "Quality Assurance",
    level: "Senior Employee",
    joinDate: "2019",
    experience: "7+ years",
    specialization: "Quality Assurance",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=700&fit=crop",
    skills: ["Automated Testing", "Selenium", "Test Strategy", "CI/CD"],
    about:
      "Quality assurance expert ensuring product excellence. Amanda designs and implements comprehensive testing strategies.",
    email: "amanda.lee@skysmart.lk",
    phone: "+94 77 123 4579",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  // Junior Employees
  {
    id: "junior-001",
    name: "Tom Hayes",
    position: "Junior Developer",
    department: "Software Development",
    level: "Junior Employee",
    joinDate: "2022",
    experience: "2+ years",
    specialization: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop",
    skills: ["JavaScript", "React", "CSS", "HTML"],
    about:
      "Junior developer passionate about web development. Tom is learning industry best practices and growing rapidly.",
    email: "tom.hayes@skysmart.lk",
    phone: "+94 77 123 4580",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "junior-002",
    name: "Nina Gupta",
    position: "Junior IoT Developer",
    department: "IoT & Embedded Systems",
    level: "Junior Employee",
    joinDate: "2022",
    experience: "1+ years",
    specialization: "IoT Development",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop",
    skills: ["Python", "IoT", "Microcontrollers", "Linux"],
    about:
      "Junior IoT developer enthusiastic about embedded systems. Nina brings fresh perspectives and innovative ideas.",
    email: "nina.gupta@skysmart.lk",
    phone: "+94 77 123 4581",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },

  {
    id: "junior-003",
    name: "Chris Park",
    position: "Junior Designer",
    department: "Design & UX",
    level: "Junior Employee",
    joinDate: "2023",
    experience: "1 year",
    specialization: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=700&fit=crop",
    skills: ["Figma", "UI Design", "Prototyping", "User Research"],
    about:
      "Junior designer creating beautiful and functional user interfaces. Chris is developing expertise in design systems.",
    email: "chris.park@skysmart.lk",
    phone: "+94 77 123 4582",
    location: "Colombo, Sri Lanka",
    status: "Active",
  },
];

export default permanentEmployees;
