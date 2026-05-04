import {
  Cpu,
  Smartphone,
  Radio,
  Image as ImageIcon,
  Zap,
  LineChart,
  Clock3,
  Activity,
  MonitorSmartphone,
  Wifi,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

/* ─── Service Cards ─── */
export const services = [
  {
    icon: Cpu,
    title: 'Web & Software Development',
    description: 'Scalable, secure, and user-focused digital solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'High-performance Android and cross-platform apps.',
  },
  {
    icon: Radio,
    title: 'IoT & Embedded Systems',
    description: 'Smart device integration using microcontroller-based systems.',
  },
  {
    icon: ImageIcon,
    title: 'Electronic & PCB Design',
    description: 'Custom circuit design, PCB layout, and fabrication solutions.',
  },
];

/* ─── Core Services ─── */
export const coreServices = [
  {
    title: 'IoT Development',
    subtitle: 'Connected Intelligence',
    description:
      'End-to-end IoT ecosystems connecting physical assets to the digital cloud for real-time monitoring and automation.',
    tags: ['Smart Sensors', 'Remote Control'],
  },
  {
    title: 'Software Development',
    subtitle: 'Enterprise Solutions',
    description:
      'Custom software architectures designed for scalability, security, and seamless integration.',
  },
  {
    title: 'Mobile App Development',
    subtitle: 'iOS & Android',
    description:
      'Intuitive, high-performance mobile applications that extend your business reach.',
  },
  {
    title: 'All Technology Solution',
    subtitle: 'Digital Transformation',
    description:
      'Comprehensive technology solutions that drive business innovation and growth.',
  },
];

/* ─── Response Network Features ─── */
export const responseFeatures = [
  {
    icon: Zap,
    title: 'Smart Routing',
    description: 'Efficient notification flows designed for faster response.',
  },
  {
    icon: LineChart,
    title: 'Downtime Analytics',
    description: 'Clear insights into system performance and issue trends.',
  },
  {
    icon: Clock3,
    title: 'Slash MTTR',
    description: 'Designed to help reduce resolution time and system delays.',
  },
  {
    icon: Activity,
    title: 'Digital Audit',
    description: 'Track system activities with clear logs and timestamps.',
  },
];

/* ─── Multi-Device Access Features ─── */
export const deviceAccessFeatures = [
  {
    icon: MonitorSmartphone,
    title: 'Adaptive UI',
    description: 'Responsive layouts across all devices',
  },
  {
    icon: Wifi,
    title: 'Live Sync',
    description: 'Consistent data across platforms',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Access',
    description: 'Protected user authentication',
  },
  {
    icon: CheckCircle2,
    title: 'Offline Support',
    description: 'Access critical data when needed',
  },
];

/* ─── Global Impact Stats ─── */
export const globalImpactStats = [
  {
    value: '50+',
    title: 'Completed Projects',
    description: 'Software, electronics, and IoT solutions delivered.',
  },
  {
    value: '10+',
    title: 'Active Clients',
    description: 'Businesses supported across multiple industries.',
  },
  {
    value: '5+',
    title: 'Core Technologies',
    description: 'Web, mobile, embedded systems, IoT, and PCB design.',
  },
  {
    value: '100%',
    title: 'Project Commitment',
    description: 'Focused on quality, reliability, and client satisfaction.',
  },
];

/* ─── Journey Milestones ─── */
export const journeyMilestones = [
  {
    year: '2015',
    title: 'Foundation',
    description:
      'Sky Smart Technology was established with a focus on software and electronics solutions.',
  },
  {
    year: '2020',
    title: 'First Projects',
    description: 'Delivered initial web and electronic system projects for local clients.',
  },
  {
    year: '2020',
    note: 'SYS LOG 2020\nSTABLE REL.',
    title: 'IoT Expansion',
    description: 'Expanded into IoT and embedded system development.',
  },
  {
    year: '2023',
    title: 'Product Growth',
    description: 'Developed custom platforms, dashboards, and mobile applications.',
  },
  {
    year: 'Future',
    title: 'Looking Ahead',
    description: 'Continuously innovating in software, electronics, and smart systems.',
  },
];

/* ─── Trusted Partners ─── */
export const trustedPartners = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
  'Partner 7',
  'Partner 8',
];

/* ─── Pricing Plans ─── */
export const pricingPlans = [
  {
    name: 'Basic',
    price: 'FREE',
    cadence: 'Life Time',
    summary: 'Industrial IoT Lite',
    features: ['1 Machine Connected', 'Standard Dashboards', 'Email Alerts', 'Community Support'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$99',
    cadence: 'Monthly',
    summary: 'Full IoT Access',
    features: ['5 Machines Connected', 'Custom Reports', 'SMS & Email Alerts', '24/7 Technical Support'],
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '$249',
    cadence: 'Monthly',
    summary: 'Unlimited Machine Sync',
    features: [
      'AI Predictive Analytics',
      'On-Premise Deployment',
      'Dedicated Success Manager',
      'Custom API Integration',
    ],
    highlighted: true,
  },
  {
    name: 'Custom',
    price: 'Quote',
    cadence: 'Yearly',
    summary: 'Full Factory Network',
    features: [
      'Custom Protocol Support',
      'White-label Option',
      'Staff Training Included',
      'Service Level Agreement',
    ],
    highlighted: false,
  },
];

/* ─── Measurable Outcomes ─── */
export const measurableOutcomes = [
  { value: '100%', label: 'Project Transparency' },
  { value: '40+', label: 'Systems Delivered' },
  { value: '5+', label: 'Technology Domains' },
  { value: '24/7', label: 'Support Availability' },
];

/* ─── Client Testimonials ─── */
export const testimonials = [
  {
    id: 1,
    text: 'Sky Smart Technology completely transformed our factory floor. The real-time IoT monitoring helped us cut downtime by nearly 40%. Exceptional engineering team!',
    author: {
      name: 'Nuwan Perera',
      date: 'Mar 12, 2026',
      initials: 'NP',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    rating: 4,
  },
  {
    id: 2,
    text: 'Their custom software dashboard is incredibly intuitive. The team was responsive throughout the entire project and delivered everything on time. Highly recommend.',
    author: {
      name: 'Samantha De Silva',
      date: 'Feb 25, 2026',
      initials: 'SD',
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    },
    rating: 5,
  },
  {
    id: 3,
    text: 'The IoT solutions helped us achieve real-time visibility across all our operations. The technical expertise and support have been outstanding. Very satisfied with the results.',
    author: {
      name: 'Michael Chen',
      date: 'Feb 10, 2026',
      initials: 'MC',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    rating: 5,
  },
  {
    id: 4,
    text: 'Excellent mobile app development. The team understood our requirements perfectly and delivered a product that exceeded expectations. Great collaboration!',
    author: {
      name: 'Jessica Taylor',
      date: 'Jan 30, 2026',
      initials: 'JT',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
    rating: 4,
  },
  {
    id: 5,
    text: 'Professional and knowledgeable team. They provided comprehensive embedded systems solutions that integrated seamlessly with our existing infrastructure.',
    author: {
      name: 'David Kumar',
      date: 'Jan 15, 2026',
      initials: 'DK',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    rating: 5,
  },
];
