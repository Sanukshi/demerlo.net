export const site = {
  name: 'Demerlo',
  domain: 'demerlo.net',
  appUrl: 'https://app.demerlo.net',
  tagline: 'AI E-commerce Product Recommendation Platform',
  description:
    'Demerlo provides a structured platform for managing e-commerce product information, customer enquiries, recommendation records and product discovery workflows.',
}

export const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Challenges', href: '/#challenges' },
  { label: 'Modules', href: '/#modules' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Architecture', href: '/#architecture' },
  { label: 'Pricing', href: '/#plans' },
  { label: 'Contact', href: '/#contact' },
]

export const heroMiniNav = [
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  brand: 'DEMERLO',
  title: 'Personalized Product Discovery Through Conversational Shopping',
  summary:
    'Discover a smarter approach to online shopping with conversational product discovery, customer preference insights, and organized recommendation workflows designed to make every shopping interaction more relevant and engaging.',
  imageAlt: 'A laptop showing a product page beside shopping bags and a cart',
  primaryCta: 'Request a Demo',
  secondaryCta: 'View Application Preview',
  secondaryHref: '#preview',
}

export const challenges = {
  titleDark: 'CHALLENGES &',
  titleAccent: 'SOLUTIONS',
  imageAlt: 'Blue-lit data centre racks representing retail analytics infrastructure',
  cards: [
    {
      number: '01',
      variant: 'white' as const,
      title: 'Complex Product Discovery',
      problem:
        'Large product catalogues make it difficult for shoppers to find relevant products and compare options efficiently.',
      solution:
        'Organizes product catalogues and categories while supporting structured recommendation workflows for simpler product discovery.',
    },
    {
      number: '02',
      variant: 'soft' as const,
      title: 'Limited Customer Preference Visibility',
      problem:
        'Retailers struggle to track customer interests, shopping preferences, and previous product enquiries in one place.',
      solution:
        'Maintains customer profiles, preference records, and interaction histories to improve visibility into customer interests.',
    },
    {
      number: '03',
      variant: 'dark' as const,
      title: 'Disorganized Recommendation Interactions',
      problem:
        'Scattered recommendation requests and chatbot conversations make customer interactions difficult to manage and track.',
      solution:
        'Centralizes recommendation requests and conversation histories for organized interaction management and activity tracking.',
    },
  ],
}

export const modules = {
  titleDark: 'CORE',
  titleAccent: 'MODULES',
  subtitle:
    'Demerlo brings essential e-commerce management capabilities together in one platform.',
  items: [
    {
      number: '01',
      icon: 'Package' as const,
      title: 'Product Catalogue Management',
      bullets: [
        'Product Registration',
        'Information Updates',
        'Product Status Control',
      ],
    },
    {
      number: '02',
      icon: 'Users' as const,
      title: 'Customer Profile Management',
      bullets: [
        'Customer Records',
        'Preference Tracking',
        'Activity History',
      ],
    },
    {
      number: '03',
      icon: 'Sparkles' as const,
      title: 'Recommendation Management',
      bullets: [
        'Request Registration',
        'Product Association',
        'Status Monitoring',
      ],
    },
    {
      number: '04',
      icon: 'MessagesSquare' as const,
      title: 'Conversational Interaction Management',
      bullets: [
        'Chat History',
        'Enquiry Records',
        'Interaction Tracking',
      ],
    },
    {
      number: '05',
      icon: 'BarChart3' as const,
      title: 'Product Performance Dashboard',
      bullets: [
        'Product Analytics',
        'Category Distribution',
        'Engagement Insights',
      ],
    },
    {
      number: '06',
      icon: 'FolderTree' as const,
      title: 'Administration & Access Management',
      bullets: [
        'Role-Based Access',
        'User Authentication',
        'Activity Monitoring',
      ],
    },
  ],
  sideText:
    'All product and customer interaction data, organized and searchable.',
  imageAlt: 'A laptop showing products, customers, recommendations, and conversations',
}

export const markets = {
  titleDark: 'TARGET MARKETS &',
  titleAccent: 'USERS',
  builtFor: [
    'Online retailers',
    'E-commerce businesses',
    'Digital marketplaces',
    'Consumer product companies',
    'Retail technology providers',
  ],
  teams: [
    {
      title: 'Business teams',
      roles: [
        'E-commerce Managers',
        'Product Catalogue Managers',
        'Marketing Teams',
      ],
    },
    {
      title: 'Operations teams',
      roles: [
        'Store Administrators',
        'Customer Support Agents',
        'System Administrators',
      ],
    },
  ],
}

export const useCases = {
  titleDark: 'PERSONALIZED',
  titleAccent: 'RECOMMENDATIONS',
  items: [
    {
      id: 'preference',
      title: 'Preference-based suggestions',
      description:
        'Recommend products based on saved customer preferences.',
      captions: [
        'Preferences stored on the customer profile',
        'Recommendations linked to recorded interests',
      ],
      imageAlt: 'A merchandiser reviewing product discovery and recommendations on a laptop',
      defaultVariant: 'white' as const,
    },
    {
      id: 'category',
      title: 'Category-based discovery',
      description:
        'Help shoppers browse and filter by product category.',
      captions: [
        'Category-linked catalogue browsing',
        'Structured filtering for faster discovery',
      ],
      imageAlt: 'A merchandiser reviewing product discovery and recommendations on a laptop',
      defaultVariant: 'active' as const,
    },
    {
      id: 'support',
      title: 'Support enquiry follow-up',
      description:
        'Agents review past conversations and recommendation history to answer repeated enquiries.',
      captions: [
        'Conversation history available to support agents',
        'Recommendation records reduce repeated enquiries',
      ],
      imageAlt: 'A merchandiser reviewing product discovery and recommendations on a laptop',
      defaultVariant: 'dark' as const,
    },
  ],
}

export const architecture = {
  titleDark: 'APPLICATION',
  titleAccent: 'ARCHITECTURE',
  lead: 'A request starts with a signed-in role, passes through the web application and catalogue APIs, and lands in the SQL database.',
  flow: [
    'Users & Roles',
    'Laravel Web Application',
    'Product Catalogue APIs',
    'SQL Database',
  ],
  pills: [
    'Role-based authentication',
    'Input validation',
    'Activity tracking',
    'Responsive web application',
  ],
  roles: [
    'Administrator',
    'Store Manager',
    'Catalogue Manager',
    'Support Agent',
  ],
}

export const preview = {
  titleDark: 'APPLICATION',
  titleAccent: 'PREVIEW',
  sampleLabel: 'Sample data',
  stats: [
    { label: 'Total Products', value: '1,248' },
    { label: 'Categories', value: '36' },
    { label: 'Recommendation Requests', value: '412' },
    { label: 'Customer Interactions', value: '2,104' },
  ],
  categoryDistribution: [
    { name: 'Electronics', value: 28 },
    { name: 'Fashion', value: 24 },
    { name: 'Home', value: 18 },
    { name: 'Beauty', value: 16 },
    { name: 'Sports', value: 14 },
  ],
  requestStatus: [
    { status: 'New', count: 48 },
    { status: 'In Review', count: 62 },
    { status: 'Recommended', count: 110 },
    { status: 'Closed', count: 192 },
  ],
  popularProducts: [
    { name: 'TrailFlex Runner', category: 'Sports', views: 842 },
    { name: 'SoftGlow Lamp', category: 'Home', views: 731 },
    { name: 'AeroBuds Mini', category: 'Electronics', views: 698 },
    { name: 'LinenEase Shirt', category: 'Fashion', views: 654 },
    { name: 'PureSkin Serum', category: 'Beauty', views: 612 },
  ],
  recentActivity: [
    {
      customer: 'A. Patel',
      message: 'Looking for wireless earbuds under $80…',
      time: '2m ago',
    },
    {
      customer: 'J. Rivera',
      message: 'Need a desk lamp for late-night reading…',
      time: '11m ago',
    },
    {
      customer: 'M. Chen',
      message: 'Show running shoes for daily training…',
      time: '28m ago',
    },
    {
      customer: 'S. Okonkwo',
      message: 'Filter home décor by warm lighting…',
      time: '1h ago',
    },
  ],
}

export const readiness = {
  titleDark: 'ENTERPRISE',
  titleAccent: 'READINESS',
  imageAlt: 'A product team reviewing a catalogue together in the office',
  cards: [
    {
      title: 'Access & Security',
      icon: 'Shield' as const,
      items: [
        'Customer access management',
        'Role-based permissions',
        'Secure authentication',
      ],
    },
    {
      title: 'Records & History',
      icon: 'History' as const,
      items: [
        'Product catalogue history',
        'Recommendation records',
        'Conversation activity tracking',
      ],
    },
    {
      title: 'Data Quality',
      icon: 'CheckCircle2' as const,
      items: [
        'Input validation',
        'Search & filtering',
        'Activity history',
      ],
    },
  ],
}

export const plans = {
  title: 'Pricing plans',
  subtitle: 'Choose the right plan for your needs.',
  items: [
    {
      name: 'Starter Plan',
      price: '$70',
      period: '/month',
      audience: 'For Small Businesses',
      description:
        'Essential tools to organize product catalogues, manage customer records, and establish structured product discovery workflows.',
      cta: 'Get Started',
      highlighted: false,
      features: [
        'Product Catalogue Management',
        'Category Organization',
        'Basic Customer Profiles',
        'Product Information Updates',
        'Recommendation Request Records',
        'Conversation History',
        'Basic Dashboard Overview',
        'Standard User Access',
      ],
    },
    {
      name: 'Professional Plan',
      price: '$150',
      period: '/month',
      audience: 'For Growing Retailers',
      description:
        'Advanced management capabilities for growing e-commerce teams seeking better customer insights and organized recommendation workflows.',
      cta: 'Get Started',
      highlighted: true,
      features: [
        'Everything in Starter',
        'Advanced Catalogue Management',
        'Customer Preference Tracking',
        'Recommendation Monitoring',
        'Conversation Activity Tracking',
        'Product Performance Insights',
        'Advanced Search & Filtering',
        'Multiple User Roles',
      ],
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      period: '',
      audience: 'For Established Businesses',
      description:
        'Comprehensive platform management features designed for larger teams requiring centralized operations, detailed activity visibility, and scalable workflows.',
      cta: 'Contact Us',
      highlighted: false,
      features: [
        'Everything in Professional',
        'Advanced User Management',
        'Role-Based Permissions',
        'Comprehensive Activity Logs',
        'Detailed Performance Dashboard',
        'Advanced Data Management',
        'Enterprise-Level Administration',
        'Priority Support',
      ],
    },
  ],
}

export const testimonials = {
  eyebrow: 'Demerlo',
  titleLead: 'What Businesses Say About',
  titleAccent: 'Smarter Product Discovery',
  subtitle:
    'Discover how organized product management, customer insights, and recommendation workflows can create more meaningful e-commerce experiences.',
  closing: 'Organized product discovery for clearer, more meaningful shopping interactions.',
  cta: 'Request a demo',
  ctaHref: '#contact',
  items: [
    {
      quote:
        'Demerlo makes product organization and customer enquiry management more structured, helping our team maintain better visibility across shopping interactions.',
      name: 'Ananya Perera',
      role: 'E-commerce Manager',
      photo: 'priya' as const,
      highlighted: false,
    },
    {
      quote:
        'The centralized recommendation records and customer profiles provide a clearer picture of customer interests and make daily management easier.',
      name: 'Kavin Rajendran',
      role: 'Retail Operations Lead',
      photo: 'james' as const,
      highlighted: true,
    },
    {
      quote:
        'Demerlo offers a practical way to organize product information and conversation histories, bringing greater clarity to our product discovery workflows.',
      name: 'Isabella Montgomery',
      role: 'Digital Commerce Specialist',
      photo: 'lena' as const,
      highlighted: false,
    },
  ],
}

export const contact = {
  title: 'Ready to improve product discovery?',
  cta: 'Request a Demo',
}

export const footer = {
  description:
    'Demerlo simplifies e-commerce product discovery through conversational shopping, organized catalogues, customer insights, and structured recommendation management.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Modules', href: '#modules' },
        { label: 'Use Cases', href: '#use-cases' },
        { label: 'Preview', href: '#preview' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#contact' },
        { label: 'Terms', href: '#contact' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}
