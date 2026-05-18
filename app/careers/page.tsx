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
  AlertCircle,
  Loader2,
  Star,
  Flame,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Vacancy {
  id: string;
  created_at: string;
  title: string | null;
  category: string | null;
  location: string | null;
  work_type: string | null;
  position_level: string | null;
  work_preference: string | null;
  status: string | null;
  urgent: boolean | null;
  posted_by: string | null;
  benifits_points: unknown;
  req_points: unknown;
  res_points: unknown;
  job_reponsibilities: unknown;
  job_requirments: unknown;
  job_benefits: unknown;
  educations: unknown;
  experiences: unknown;
}

// ─── Supabase fetch ───────────────────────────────────────────────────────────

async function fetchVacancies(): Promise<Vacancy[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("vacancies")
    .select("*")
    .eq("status", "ACTIVE")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Vacancy[];
}

// ─── Safe coercion helper ─────────────────────────────────────────────────────

function toStringArray(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value))
    return (value as unknown[])
      .filter((v) => typeof v === "string" && v.trim()) as string[];
  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      if (Array.isArray(parsed))
        return (parsed as unknown[])
          .filter((v) => typeof v === "string" && v.trim()) as string[];
      if (typeof parsed === "string") {
        return parsed.split("\n").map((s) => s.trim()).filter(Boolean);
      }
    } catch {
      // not JSON, fall through
    }
    return value.split("\n").map((s) => s.trim()).filter(Boolean);
  }
  if (typeof value === "object")
    return Object.values(value as Record<string, unknown>)
      .filter((v) => typeof v === "string" && (v as string).trim()) as string[];
  return [];
}

function getResponsibilities(v: Vacancy): string[] {
  const p = toStringArray(v.job_reponsibilities);
  return p.length ? p : toStringArray(v.res_points);
}

function getRequirements(v: Vacancy): string[] {
  const p = toStringArray(v.job_requirments);
  return p.length ? p : toStringArray(v.req_points);
}

function getBenefits(v: Vacancy): string[] {
  const p = toStringArray(v.job_benefits);
  return p.length ? p : toStringArray(v.benifits_points);
}

function getEducations(v: Vacancy): string[] {
  return toStringArray(v.educations);
}

function getExperiences(v: Vacancy): string[] {
  return toStringArray(v.experiences);
}

// ─── Category → icon / gradient maps ─────────────────────────────────────────

const categoryIconMap: Record<string, React.ElementType> = {
  Developer: Code,
  "UI/UX Designer": Palette,
  Marketing: Megaphone,
  Product: Target,
  Operations: Database,
  Support: Headphones,
  Analytics: LineChart,
  Designer: Palette,
  Engineer: Code,
};

const categoryGradMap: Record<string, string> = {
  Developer: "var(--grad-blue-violet)",
  "UI/UX Designer": "var(--grad-violet-pink)",
  Marketing: "var(--grad-pink-orange)",
  Product: "var(--grad-fuchsia-violet)",
  Operations: "var(--grad-cyan-blue)",
  Support: "var(--grad-teal-emerald)",
  Analytics: "var(--grad-emerald-cyan)",
  Designer: "var(--grad-violet-pink)",
  Engineer: "var(--grad-blue-violet)",
};

const defaultGrads = [
  "var(--grad-blue-violet)",
  "var(--grad-violet-pink)",
  "var(--grad-emerald-cyan)",
  "var(--grad-pink-orange)",
  "var(--grad-sky-indigo)",
  "var(--grad-fuchsia-violet)",
  "var(--grad-cyan-blue)",
  "var(--grad-teal-emerald)",
];

function getGrad(v: Vacancy, index: number): string {
  return categoryGradMap[v.category ?? ""] ?? defaultGrads[index % defaultGrads.length];
}

function getIcon(v: Vacancy): React.ElementType {
  return categoryIconMap[v.category ?? ""] ?? Briefcase;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const companyBenefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "Industry-leading compensation with performance bonuses", grad: "var(--grad-emerald-cyan)" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, vision, and mental health coverage", grad: "var(--grad-rose-pink)" },
  { icon: Coffee, title: "Flexible Work", description: "Remote-first culture with flexible hours and work-life balance", grad: "var(--grad-orange-amber)" },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000/year for courses, conferences, and certifications", grad: "var(--grad-blue-violet)" },
  { icon: Zap, title: "Latest Tech", description: "Work with cutting-edge tools, frameworks, and technologies", grad: "var(--grad-sky-indigo)" },
  { icon: Users, title: "Team Culture", description: "Regular team events, hackathons, and global offsites", grad: "var(--grad-violet-pink)" },
  { icon: Rocket, title: "Equity & Growth", description: "Stock options and clear career progression paths", grad: "var(--grad-indigo-blue)" },
  { icon: Globe, title: "Remote Perks", description: "Home office budget, co-working allowance, and travel benefits", grad: "var(--grad-fuchsia-violet)" },
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

const currentYear = new Date().getFullYear();

// ─── Component ────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittingJobId, setSubmittingJobId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    resumeFile: null as File | null, 
    portfolioUrl: "", 
    coverLetter: "", 
    linkedin: "",
  });

  useEffect(() => {
    fetchVacancies()
      .then(setVacancies)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const jobCategories = [
    "All",
    ...Array.from(
      new Set(vacancies.map((v) => v.category).filter(Boolean) as string[])
    ),
  ];

  const filteredJobs = vacancies.filter((v) => {
    const matchesCategory = selectedCategory === "All" || v.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      v.title?.toLowerCase().includes(q) ||
      v.category?.toLowerCase().includes(q) ||
      v.location?.toLowerCase().includes(q) ||
      v.work_preference?.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = async (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    
    if (!formData.resumeFile) {
      alert("Please upload your resume");
      return;
    }

    setSubmittingJobId(jobId);
    const supabase = createClient();

    try {
      // Upload resume to storage
      const fileExt = formData.resumeFile.name.split(".").pop();
      const fileName = `${Date.now()}-${formData.name.replace(/\s+/g, "-")}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("career_resumes")
        .upload(filePath, formData.resumeFile);

      if (uploadError) throw new Error(uploadError.message);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("career_resumes")
        .getPublicUrl(filePath);

      // Insert into career_applications table
      const { error: dbError } = await supabase.from("career_applications").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone ? parseInt(formData.phone.replace(/\D/g, '')) : null,
        linkedln: formData.linkedin || null,
        website: formData.portfolioUrl || null,
        personal_note: formData.coverLetter || null,
        resume: urlData.publicUrl,
        applied_for: jobId,
      });

      if (dbError) throw new Error(dbError.message);

      // Success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          resumeFile: null, 
          portfolioUrl: "", 
          coverLetter: "", 
          linkedin: "" 
        });
      }, 3000);
    } catch (err) {
      alert("Submission failed: " + (err as Error).message);
    } finally {
      setSubmittingJobId(null);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar - keep your existing navbar code */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.08, rotate: 3 }}>
                <Image src="/icon.png" alt="Amez Cloud" width={32} height={32} className="rounded-lg shadow-md" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-gray-900 text-base">Amez Cloud</span>
                <span className="text-[10px] text-gray-400 font-medium">DigitalNexus Technologies</span>
              </div>
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - keep your existing hero code */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--hero-bg)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-semibold mb-6 border border-blue-100"
            >
              <Briefcase className="w-4 h-4" />
              {loading ? "Loading…" : `${vacancies.length} Open Positions`} · Remote & Hybrid
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Build the Future with{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--brand-gradient)" }}>
                Amez Cloud
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance mb-4">
              Join a team of innovators, creators, and problem-solvers building cutting-edge digital solutions across Web3, Metaverse, AI, and Cloud.
            </p>
            <p className="text-base text-gray-500 text-balance">
              We&apos;re a global remote-first company with team members across 12+ countries, working on projects that shape the digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - keep your existing benefits code */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We offer more than just a job. Join a culture of innovation, collaboration, and continuous growth with industry-leading benefits.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 260 }}
                  className="rounded-2xl overflow-hidden relative backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl cursor-default"
                  style={{ background: benefit.grad }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
                  <div className="relative z-10 p-6">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.15 }} transition={{ type: "spring", stiffness: 280 }}
                      className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-lg border border-white/30"
                    >
                      <Icon className="w-6 h-6 text-white drop-shadow-md" />
                    </motion.div>
                    <h3 className="font-bold text-white text-base mb-2 drop-shadow-md">{benefit.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed drop-shadow-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4" id="openings">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              {loading
                ? "Loading opportunities…"
                : `Explore ${vacancies.length} opportunities across departments. Filter by category or search for specific roles.`}
            </p>
          </motion.div>

          {/* Search & filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions, keywords, or departments…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {jobCategories.map((cat) => (
                <motion.button
                  key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === cat ? "text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={selectedCategory === cat ? { background: "var(--brand-gradient)" } : {}}
                >
                  {cat}{cat !== "All" && ` (${vacancies.filter((v) => v.category === cat).length})`}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Loading and Error states */}
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader2 className="w-12 h-12 animate-spin" style={{ color: "var(--brand-primary, #6366f1)" }} />
              <p className="text-gray-500 font-medium">Fetching open positions…</p>
            </motion.div>
          )}

          {!loading && error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
            >
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Failed to load vacancies</h3>
              <p className="text-sm text-gray-500 font-mono break-all">{error}</p>
            </motion.div>
          )}

          {/* Job cards */}
          {!loading && !error && (
            <div className="grid gap-6">
              <AnimatePresence mode="wait">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, i) => {
                    const Icon = getIcon(job);
                    const grad = getGrad(job, i);
                    const isExpanded = selectedJob === job.id;
                    const responsibilities = getResponsibilities(job);
                    const requirements = getRequirements(job);
                    const jobBenefits = getBenefits(job);
                    const educations = getEducations(job);
                    const experiences = getExperiences(job);
                    const isSubmitting = submittingJobId === job.id;

                    return (
                      <motion.div
                        key={job.id}
                        custom={i} variants={fadeUp} initial="hidden" animate="visible" exit="hidden" layout
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        {/* Card header */}
                        <div className="p-6 md:p-8 cursor-pointer" onClick={() => setSelectedJob(isExpanded ? null : job.id)}>
                          <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                            <div className="flex items-start gap-5 flex-1 min-w-0">
                              <motion.div
                                whileHover={{ scale: 1.08, rotate: -3 }}
                                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md border border-white/30"
                                style={{ background: grad }}
                              >
                                <Icon className="w-7 h-7 text-white drop-shadow-md" />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-3 mb-3 flex-wrap">
                                  <h3 className="text-2xl font-bold text-gray-900">{job.title ?? "Untitled Position"}</h3>
                                  {job.urgent && (
                                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full flex items-center gap-1">
                                      <Flame className="w-3 h-3" /> Urgent
                                    </span>
                                  )}
                                  {job.position_level && (
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                                      {job.position_level}
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                                  {job.category && <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{job.category}</span>}
                                  {job.location && <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</span>}
                                  {job.work_preference && <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{job.work_preference}</span>}
                                  {job.work_type && <span className="flex items-center gap-2"><Award className="w-4 h-4" />{job.work_type}</span>}
                                  {educations.length > 0 && (
                                    <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" />{educations.join(", ")}</span>
                                  )}
                                  {experiences.length > 0 && (
                                    <span className="flex items-center gap-2 font-semibold text-green-600">
                                      <TrendingUp className="w-4 h-4" />{experiences.join(", ")}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 text-sm font-bold text-white rounded-xl shadow-lg shrink-0 flex items-center gap-2"
                              style={{ background: grad }}
                            >
                              {isExpanded ? "Close" : <><span>View Details</span><ArrowRight className="w-4 h-4" /></>}
                            </motion.button>
                          </div>
                        </div>

                        {/* Expanded panel */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                              className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 md:p-8"
                            >
                              <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {responsibilities.length > 0 && (
                                  <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                      <CheckCircle2 className="w-5 h-5 text-blue-600" /> Key Responsibilities
                                    </h4>
                                    <ul className="space-y-3">
                                      {responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                          <span>{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {requirements.length > 0 && (
                                  <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                      <Shield className="w-5 h-5 text-green-600" /> Required Qualifications
                                    </h4>
                                    <ul className="space-y-3">
                                      {requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                          <span>{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              {jobBenefits.length > 0 && (
                                <div className="mb-8">
                                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" /> Role Benefits
                                  </h4>
                                  <ul className="grid gap-2">
                                    {jobBenefits.map((b, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="text-blue-400 font-bold">+</span>
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Application form */}
                              {!submitted ? (
                                <form onSubmit={(e) => handleSubmit(e, job.id)} className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
                                  <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: grad }}>
                                      <Send className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-gray-900 text-lg">Apply for this Position</h4>
                                      <p className="text-sm text-gray-500">Fill out the form and we'll get back to you within 2-3 business days</p>
                                    </div>
                                  </div>

                                  <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                      <input type="text" placeholder="John Doe" required value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                      <input type="email" placeholder="john@example.com" required value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                  </div>

                                  <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                      <input type="tel" placeholder="+1 (555) 000-0000" required value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
                                      <input type="url" placeholder="https://linkedin.com/in/johndoe" value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                  </div>

                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Resume *</label>
                                    <input
                                      type="file"
                                      accept=".pdf,.doc,.docx"
                                      required
                                      id={`resume-${job.id}`}
                                      className="hidden"
                                      onChange={(e) => setFormData({ ...formData, resumeFile: e.target.files?.[0] ?? null })}
                                    />
                                    <label
                                      htmlFor={`resume-${job.id}`}
                                      className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:bg-white transition-colors text-sm"
                                    >
                                      <span className={formData.resumeFile ? "text-gray-800 font-medium truncate" : "text-gray-400"}>
                                        {formData.resumeFile ? formData.resumeFile.name : "Upload resume (PDF, DOC, DOCX)"}
                                      </span>
                                    </label>
                                  </div>

                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      Portfolio URL <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                                    </label>
                                    <input
                                      type="url"
                                      placeholder="https://github.com/username or portfolio link"
                                      value={formData.portfolioUrl}
                                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                      Cover Letter <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                                    </label>
                                    <textarea 
                                      placeholder="Tell us why you're a great fit for this role…" 
                                      value={formData.coverLetter}
                                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                      rows={5}
                                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none bg-gray-50 focus:bg-white transition-colors" 
                                    />
                                  </div>

                                  <motion.button
                                    type="submit" 
                                    whileHover={{ scale: 1.02 }} 
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-70"
                                    style={{ background: grad }}
                                  >
                                    {isSubmitting ? (
                                      <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                                      </>
                                    ) : (
                                      <>
                                        <Send className="w-5 h-5" /> Submit Application
                                      </>
                                    )}
                                  </motion.button>
                                </form>
                              ) : (
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                  className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
                                >
                                  <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                  >
                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                  </motion.div>
                                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                                  <p className="text-gray-600">
                                    Thank you for applying. We'll review your application and get back to you within 2-3 business days.
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
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                    <p className="text-gray-500">Try adjusting your filters or search query</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process Section - keep your existing code */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We believe in a transparent, efficient hiring process. Here's what to expect when you apply.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringProcess.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 260 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10"
                  style={{ background: "var(--grad-blue-violet)", borderRadius: "0 0 0 100%" }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-white text-lg shadow-md"
                    style={{ background: "var(--brand-gradient)" }}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />{step.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - keep your existing code */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
            style={{ background: "var(--brand-gradient)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="relative z-10">
              <Building2 className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-lg" />
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">Don't See a Perfect Fit?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link href="mailto:careers@amezcloud.com" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto"
                >
                  <Send className="w-5 h-5" /> Send General Application
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - keep your existing footer code */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <Image src="/amezcloud-light.svg" alt="Amez Cloud Logo" width={160} height={50}
              className="h-auto mb-4" style={{ maxWidth: "160px" }} priority />
            <p className="text-gray-400 text-sm">Building the digital future since 2016</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="mailto:careers@amezcloud.com" className="hover:text-white transition-colors">careers@amezcloud.com</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
            © {currentYear} Amez Cloud - DigitalNexus Technologies · All rights reserved
          </div>
        </div>
      </footer>
    </main>
  );
}