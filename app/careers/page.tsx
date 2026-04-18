"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
  Award,
  Send,
  CheckCircle2,
  Code,
  Palette,
  Megaphone,
  Database,
  Headphones,
  LineChart,
  Search,
  Filter,
  ArrowRight,
  Building2,
  Rocket,
  Target,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const jobCategories = ["All", "Engineering", "Design", "Marketing", "Product", "Operations"];

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$80k - $120k",
    experience: "5+ years",
    openings: 3,
    grad: "var(--grad-blue-violet)",
    icon: Code,
    description:
      "Build scalable, high-performance web applications using modern technologies. Lead technical architecture decisions and mentor junior developers.",
    responsibilities: [
      "Design and develop full-stack applications with React, Node.js, and PostgreSQL",
      "Architect scalable microservices and RESTful APIs",
      "Collaborate with product and design teams to deliver features",
      "Mentor junior developers and conduct code reviews",
      "Optimize application performance and database queries",
    ],
    requirements: [
      "5+ years of full-stack development experience",
      "Expert in React, TypeScript, Node.js, and SQL databases",
      "Experience with AWS/Azure cloud platforms",
      "Strong understanding of software architecture patterns",
      "Excellent problem-solving and communication skills",
    ],
    niceToHave: [
      "Experience with Docker and Kubernetes",
      "Knowledge of GraphQL and microservices",
      "Contributions to open-source projects",
    ],
  },
  {
    id: 2,
    title: "Lead UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $100k",
    experience: "4+ years",
    openings: 2,
    grad: "var(--grad-violet-pink)",
    icon: Palette,
    description:
      "Create beautiful, intuitive user experiences for web and mobile applications. Lead design systems and establish design standards.",
    responsibilities: [
      "Design end-to-end user experiences for digital products",
      "Create and maintain comprehensive design systems",
      "Conduct user research, usability testing, and A/B tests",
      "Collaborate with developers to ensure design implementation",
      "Present design concepts to stakeholders and clients",
    ],
    requirements: [
      "4+ years of UI/UX design experience",
      "Proficient in Figma, Adobe XD, and prototyping tools",
      "Strong portfolio demonstrating user-centered design",
      "Understanding of front-end development (HTML/CSS/JS)",
      "Excellent visual design and typography skills",
    ],
    niceToHave: [
      "Experience with motion design and animation",
      "Knowledge of accessibility standards (WCAG)",
      "Familiarity with design tokens and Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    salary: "$75k - $110k",
    experience: "4+ years",
    openings: 2,
    grad: "var(--grad-emerald-cyan)",
    icon: Shield,
    description:
      "Manage infrastructure, CI/CD pipelines, and ensure system reliability across cloud platforms.",
    responsibilities: [
      "Design and maintain scalable cloud infrastructure",
      "Implement CI/CD pipelines using GitLab/GitHub Actions",
      "Monitor system performance and implement observability",
      "Automate deployment and infrastructure provisioning",
      "Ensure security best practices and compliance",
    ],
    requirements: [
      "4+ years of DevOps/SRE experience",
      "Expert in Docker, Kubernetes, and Terraform",
      "Strong scripting skills (Python, Bash, Go)",
      "Experience with AWS, Azure, or GCP",
      "Knowledge of monitoring tools (Prometheus, Grafana)",
    ],
    niceToHave: [
      "Experience with service mesh (Istio, Linkerd)",
      "Knowledge of security scanning and compliance",
      "Certification in cloud platforms",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $85k",
    experience: "3+ years",
    openings: 1,
    grad: "var(--grad-pink-orange)",
    icon: Megaphone,
    description:
      "Drive growth through SEO, content marketing, social media, and paid advertising strategies.",
    responsibilities: [
      "Develop and execute comprehensive digital marketing strategies",
      "Manage SEO/SEM campaigns and optimize conversion rates",
      "Create engaging content for blogs, social media, and email",
      "Analyze marketing metrics and provide actionable insights",
      "Collaborate with sales and product teams on campaigns",
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Proven track record in SEO, content marketing, and PPC",
      "Experience with Google Analytics, SEMrush, HubSpot",
      "Strong copywriting and communication skills",
      "Data-driven mindset with analytical skills",
    ],
    niceToHave: [
      "Experience with marketing automation platforms",
      "Knowledge of video marketing and YouTube SEO",
      "Familiarity with Web3 and crypto marketing",
    ],
  },
  {
    id: 5,
    title: "VR/AR Developer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    salary: "$70k - $105k",
    experience: "3+ years",
    openings: 2,
    grad: "var(--grad-sky-indigo)",
    icon: Globe,
    description:
      "Build immersive VR/AR experiences for metaverse projects and enterprise clients using Unity3D and WebXR.",
    responsibilities: [
      "Develop VR/AR applications using Unity3D or Unreal Engine",
      "Implement WebXR experiences with Three.js and A-Frame",
      "Optimize 3D models and assets for real-time performance",
      "Integrate multiplayer networking and voice chat",
      "Collaborate with 3D artists and game designers",
    ],
    requirements: [
      "3+ years of VR/AR development experience",
      "Proficient in Unity3D or Unreal Engine with C#/C++",
      "Experience with WebXR, Three.js, or A-Frame",
      "Strong 3D math, graphics programming, and optimization",
      "Familiarity with VR/AR hardware (Meta Quest, HoloLens)",
    ],
    niceToHave: [
      "Experience with blockchain and NFT integration",
      "Knowledge of spatial audio and haptics",
      "Published VR/AR apps on app stores",
    ],
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "Hybrid",
    type: "Full-time",
    salary: "$85k - $130k",
    experience: "5+ years",
    openings: 1,
    grad: "var(--grad-fuchsia-violet)",
    icon: Target,
    description:
      "Lead product strategy and roadmap for our SaaS and enterprise solutions. Drive product vision from concept to launch.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Conduct market research and competitive analysis",
      "Work with engineering, design, and marketing teams",
      "Manage product backlog and prioritize features",
      "Analyze product metrics and user feedback for iteration",
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong understanding of agile methodologies (Scrum/Kanban)",
      "Data-driven decision making with analytics tools",
      "Excellent stakeholder management and communication",
      "Experience launching and scaling SaaS products",
    ],
    niceToHave: [
      "Technical background or engineering degree",
      "Experience with B2B and enterprise products",
      "Product management certification (CSPO, CPM)",
    ],
  },
  {
    id: 7,
    title: "Data Analyst",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    salary: "$55k - $80k",
    experience: "2+ years",
    openings: 1,
    grad: "var(--grad-cyan-blue)",
    icon: LineChart,
    description:
      "Analyze business data, create dashboards, and provide insights to drive strategic decisions across the organization.",
    responsibilities: [
      "Analyze large datasets to identify trends and insights",
      "Create interactive dashboards using Tableau/Power BI",
      "Develop SQL queries and automate reporting processes",
      "Collaborate with teams to define KPIs and metrics",
      "Present findings to stakeholders and executives",
    ],
    requirements: [
      "2+ years of data analysis experience",
      "Expert in SQL and data visualization tools",
      "Proficient in Excel and statistical analysis",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation abilities",
    ],
    niceToHave: [
      "Experience with Python or R for data analysis",
      "Knowledge of machine learning concepts",
      "Familiarity with cloud data warehouses (Snowflake, BigQuery)",
    ],
  },
  {
    id: 8,
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    salary: "$50k - $70k",
    experience: "2+ years",
    openings: 2,
    grad: "var(--grad-teal-emerald)",
    icon: Headphones,
    description:
      "Ensure customer satisfaction, drive product adoption, and manage relationships with enterprise clients.",
    responsibilities: [
      "Onboard new customers and ensure successful implementation",
      "Build strong relationships with key stakeholders",
      "Monitor customer health scores and identify risks",
      "Drive product adoption and identify upsell opportunities",
      "Gather feedback and advocate for customer needs",
    ],
    requirements: [
      "2+ years of customer success or account management",
      "Strong interpersonal and communication skills",
      "Experience with CRM tools (Salesforce, HubSpot)",
      "Problem-solving mindset and empathy for customers",
      "Ability to manage multiple accounts simultaneously",
    ],
    niceToHave: [
      "Experience in SaaS or technology industry",
      "Knowledge of support ticketing systems",
      "Familiarity with data analytics and reporting",
    ],
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Industry-leading compensation with performance bonuses",
    grad: "var(--grad-emerald-cyan)",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, vision, and mental health coverage",
    grad: "var(--grad-rose-pink)",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and work-life balance",
    grad: "var(--grad-orange-amber)",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000/year for courses, conferences, and certifications",
    grad: "var(--grad-blue-violet)",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "Work with cutting-edge tools, frameworks, and technologies",
    grad: "var(--grad-sky-indigo)",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Regular team events, hackathons, and global offsites",
    grad: "var(--grad-violet-pink)",
  },
  {
    icon: Rocket,
    title: "Equity & Growth",
    description: "Stock options and clear career progression paths",
    grad: "var(--grad-indigo-blue)",
  },
  {
    icon: Globe,
    title: "Remote Perks",
    description: "Home office budget, co-working allowance, and travel benefits",
    grad: "var(--grad-fuchsia-violet)",
  },
];

const hiringProcess = [
  { step: "1", title: "Application Review", duration: "2-3 days" },
  { step: "2", title: "Phone Screening", duration: "30 min" },
  { step: "3", title: "Technical/Portfolio Review", duration: "1 hour" },
  { step: "4", title: "Team Interview", duration: "1-2 hours" },
  { step: "5", title: "Final Interview", duration: "45 min" },
  { step: "6", title: "Offer", duration: "1-2 days" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
    linkedin: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent, jobId: number) => {
    e.preventDefault();
    console.log("[v0] Form submitted for job:", jobId, formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: "",
        coverLetter: "",
        linkedin: "",
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md"
                style={{ background: "var(--brand-gradient)" }}
              >
                AC
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-gray-900 text-base">Amez Cloud</span>
                <span className="text-[10px] text-gray-400 font-medium">
                  DigitalNexus Technologies
                </span>
              </div>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "var(--hero-bg)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-semibold mb-6 border border-blue-100"
            >
              <Briefcase className="w-4 h-4" />
              {jobOpenings.length} Open Positions · Remote & Hybrid
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Build the Future with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--brand-gradient)" }}
              >
                Amez Cloud
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance mb-4">
              Join a team of innovators, creators, and problem-solvers building
              cutting-edge digital solutions across Web3, Metaverse, AI, and Cloud.
            </p>
            <p className="text-base text-gray-500 text-balance">
              We&apos;re a global remote-first company with team members across 12+
              countries, working on projects that shape the digital future.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 justify-center mt-12"
            >
              <div className="text-center">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  50+
                </p>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Team Members</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  12+
                </p>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Countries</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">
                  8
                </p>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Years Growing</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  95%
                </p>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Employee Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We offer more than just a job. Join a culture of innovation, collaboration,
              and continuous growth with industry-leading benefits.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="rounded-2xl overflow-hidden relative backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl cursor-default"
                  style={{ background: benefit.grad }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
                  <div className="relative z-10 p-6">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 280 }}
                      className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-lg border border-white/30"
                    >
                      <Icon className="w-6 h-6 text-white drop-shadow-md" />
                    </motion.div>
                    <h3 className="font-bold text-white text-base mb-2 drop-shadow-md">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed drop-shadow-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4" id="openings">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Explore {jobOpenings.length} opportunities across engineering, design,
              marketing, and operations. Filter by category or search for specific roles.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions, keywords, or departments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {jobCategories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={
                    selectedCategory === cat
                      ? { background: "var(--brand-gradient)" }
                      : {}
                  }
                >
                  {cat}
                  {cat !== "All" &&
                    ` (${jobOpenings.filter((j) => j.department === cat).length})`}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Job Cards */}
          <div className="grid gap-6">
            <AnimatePresence mode="wait">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, i) => {
                  const Icon = job.icon;
                  const isExpanded = selectedJob === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      layout
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div
                        className="p-6 md:p-8 cursor-pointer"
                        onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                      >
                        <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                          <div className="flex items-start gap-5 flex-1 min-w-0">
                            <motion.div
                              whileHover={{ scale: 1.08, rotate: -3 }}
                              className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md border border-white/30"
                              style={{ background: job.grad }}
                            >
                              <Icon className="w-7 h-7 text-white drop-shadow-md" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start gap-3 mb-3 flex-wrap">
                                <h3 className="text-2xl font-bold text-gray-900">
                                  {job.title}
                                </h3>
                                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                                  {job.openings} opening{job.openings > 1 ? "s" : ""}
                                </span>
                              </div>
                              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                                {job.description}
                              </p>
                              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                  <Briefcase className="w-4 h-4" />
                                  {job.department}
                                </span>
                                <span className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  {job.type}
                                </span>
                                <span className="flex items-center gap-2">
                                  <Award className="w-4 h-4" />
                                  {job.experience}
                                </span>
                                <span className="flex items-center gap-2 font-semibold text-green-600">
                                  <DollarSign className="w-4 h-4" />
                                  {job.salary}
                                </span>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 text-sm font-bold text-white rounded-xl shadow-lg shrink-0 flex items-center gap-2"
                            style={{ background: job.grad }}
                          >
                            {isExpanded ? (
                              "Close"
                            ) : (
                              <>
                                View Details
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </motion.button>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 md:p-8"
                          >
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                              <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-3">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                  <Shield className="w-5 h-5 text-green-600" />
                                  Required Qualifications
                                </h4>
                                <ul className="space-y-3">
                                  {job.requirements.map((req, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                                {job.niceToHave && job.niceToHave.length > 0 && (
                                  <div className="mt-6">
                                    <h5 className="font-semibold text-gray-700 text-sm mb-3">
                                      Nice to Have:
                                    </h5>
                                    <ul className="space-y-2">
                                      {job.niceToHave.map((nice, idx) => (
                                        <li
                                          key={idx}
                                          className="flex items-start gap-2 text-sm text-gray-500"
                                        >
                                          <span className="text-blue-400">+</span>
                                          <span>{nice}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Application Form */}
                            {!submitted ? (
                              <form
                                onSubmit={(e) => handleSubmit(e, job.id)}
                                className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm"
                              >
                                <div className="flex items-center gap-3 mb-6">
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ background: job.grad }}
                                  >
                                    <Send className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                      Apply for this Position
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                      Fill out the form below and we&apos;ll get back to you
                                      within 2-3 business days
                                    </p>
                                  </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      Full Name *
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="John Doe"
                                      required
                                      value={formData.name}
                                      onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                      }
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      Email Address *
                                    </label>
                                    <input
                                      type="email"
                                      placeholder="john@example.com"
                                      required
                                      value={formData.email}
                                      onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                      }
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                    />
                                  </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      Phone Number *
                                    </label>
                                    <input
                                      type="tel"
                                      placeholder="+1 (555) 000-0000"
                                      required
                                      value={formData.phone}
                                      onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                      }
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      LinkedIn Profile
                                    </label>
                                    <input
                                      type="url"
                                      placeholder="https://linkedin.com/in/johndoe"
                                      value={formData.linkedin}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          linkedin: e.target.value,
                                        })
                                      }
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Resume/Portfolio URL *
                                  </label>
                                  <input
                                    type="url"
                                    placeholder="https://example.com/resume.pdf or GitHub/Portfolio link"
                                    required
                                    value={formData.resume}
                                    onChange={(e) =>
                                      setFormData({ ...formData, resume: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Cover Letter (Optional)
                                  </label>
                                  <textarea
                                    placeholder="Tell us why you're a great fit for this role..."
                                    value={formData.coverLetter}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        coverLetter: e.target.value,
                                      })
                                    }
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none bg-gray-50 focus:bg-white transition-colors"
                                  />
                                </div>
                                <motion.button
                                  type="submit"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full px-8 py-4 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-base"
                                  style={{ background: job.grad }}
                                >
                                  <Send className="w-5 h-5" />
                                  Submit Application
                                </motion.button>
                              </form>
                            ) : (
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
                              >
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 200 }}
                                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                  <CheckCircle2 className="w-8 h-8 text-white" />
                                </motion.div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                  Application Submitted!
                                </h4>
                                <p className="text-gray-600">
                                  Thank you for applying. We&apos;ll review your application
                                  and get back to you within 2-3 business days.
                                </p>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No positions found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We believe in a transparent, efficient hiring process. Here&apos;s what to
              expect when you apply.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringProcess.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10"
                  style={{
                    background: `var(--grad-blue-violet)`,
                    borderRadius: "0 0 0 100%",
                  }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-white text-lg shadow-md"
                    style={{ background: "var(--brand-gradient)" }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              Total time from application to offer: <span className="font-bold text-gray-900">1-2 weeks</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
            style={{ background: "var(--brand-gradient)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="relative z-10">
              <Building2 className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-lg" />
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
                Don&apos;t See a Perfect Fit?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                We&apos;re always looking for talented individuals. Send us your resume
                and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link
                href="mailto:careers@amezcloud.com"
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  Send General Application
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-lg"
              style={{ background: "var(--brand-gradient)" }}
            >
              AC
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Amez Cloud</div>
              <div className="text-xs text-gray-400">DigitalNexus Technologies</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Building the digital future since 2016
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="mailto:careers@amezcloud.com"
              className="hover:text-white transition-colors"
            >
              careers@amezcloud.com
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
            © 2026 Amez Cloud · DigitalNexus Technologies · All rights reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
