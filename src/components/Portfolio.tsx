'use client';

import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle, 
  ExternalLink, 
  Globe, 
  Award, 
  LinkIcon, 
  Layers, 
  X,
  Sparkles,
  ArrowRight,
  Cpu,
  Terminal,
  FolderGit2
} from 'lucide-react';

interface ProjectItem {
  id: number;
  name: string;
  category: 'Enterprise / CRM' | 'Real Estate & Maps' | 'E-Commerce / FinTech' | 'Live / Media';
  type: string;
  company: string;
  timeline: string;
  link?: string | null;
  highlightMetric: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  tags: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const skillCategories = [
    { 
      category: 'Core Frontend & Edge Architecture', 
      items: ['Next.js (App Router SSR/SSG)', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js (Learning)'] 
    },
    { 
      category: 'Backend, API & Databases', 
      items: ['Node.js & Express.js', 'Laravel (PHP)', 'WebSockets (Socket.io)', 'RESTful APIs', 'Sequelize ORM'] 
    },
    { 
      category: 'Cloud, Infrastructure & QA', 
      items: ['AWS S3, Amplify & EC2', 'AWS Lambda@Edge & CloudFront', 'Cloudflare Turnstile', 'Manual & E2E QA Testing'] 
    },
    { 
      category: 'Design & Engineering Leadership', 
      items: ['Figma / Adobe XD UI/UX Design', 'Technical Architecture', 'Team Mentorship & Coordination', 'Complex Project Management'] 
    }
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      name: "Enterprise Real Estate CRM Platform",
      category: "Enterprise / CRM",
      company: "Digital Insects Co.,Ltd",
      timeline: "Jun 2025 – Present",
      type: "Multi-Platform Enterprise Solution",
      highlightMetric: "Dynamic Multi-Role Lead Assignment & Dynamic Pipeline",
      shortDescription: "Architected a multi-platform CRM and mobile app featuring automated campaign segmentation, unified calendar operations, and public listing ingestion.",
      longDescription: `Led end-to-end software architecture and solution engineering for a high-security real estate CRM system.

Key Engineering & Leadership Highlights:
• Architected complex, multi-role lead assignment workflows across divisions with confidential room-level granular access controls.
• Integrated dynamic public website listing synchronization and automated web-scraping pipelines for continuous market lead ingestion.
• Built unified calendar scheduling modules handling appointment reminders and transport logistics tracking.
• Directed end-to-end manual QA cycles and login event security auditing for system integrity.`,
      role: "Lead Developer & System Architect",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AWS", "Figma"]
    },
    {
      id: 2,
      name: "New Home Realty & Dynamic Mapping Portal",
      category: "Real Estate & Maps",
      company: "Digital Insects Co.,Ltd",
      timeline: "Jul 2024 – Nov 2025",
      type: "High-Performance Property Search Engine",
      link: "https://www.newhomerealty.com.mm/",
      highlightMetric: "Lambda@Edge Masking & Server-Side Dynamic SSR",
      shortDescription: "High-volume listing platform with live Google Maps integration, 360 virtual tours, and custom server-side rendering for bot dynamic masking.",
      longDescription: `Engineered an advanced real estate discovery portal optimized for extreme SEO indexability and low latency map interactions.

Key Engineering & Leadership Highlights:
• Overcame indexing limitations by implementing Lambda@Edge request masking, bot detection, and custom URL rewriting at the CloudFront edge.
• Built synchronized split-screen map navigation with dynamic pin plotting using custom Google Maps overlays.
• Embedded real-time financial tools including mortgage and property tax calculation engines.
• Modeled multi-tiered relational database schemes allowing deep inheritance across categories and sub-property types.`,
      role: "Senior Frontend Lead & Solutions Architect",
      tags: ["React.js", "Next.js", "Google Maps API", "AWS Lambda@Edge", "WebSockets"]
    },
    {
      id: 3,
      name: "NCELC Enterprise Education Engine",
      category: "Enterprise / CRM",
      company: "Digital Insects Co.,Ltd",
      timeline: "Apr 2026 – Jun 2026",
      type: "School Management Platform & Dynamic Document System",
      highlightMetric: "Automated Dynamic Report & Certificate Rendering",
      shortDescription: "End-to-end school management system powering academic lifecycle tracking, grading workflows, and real-time document compilation.",
      longDescription: `Architected a customized enterprise administrative portal to fully digitize student academic cycles.

Key Engineering & Leadership Highlights:
• Designed relational schema models to seamlessly track enrollments, dynamic batches, class schedules, and teacher allocations.
• Developed server-side PDF generation engines to instantly compile official exam report cards, student ID cards, and certificates.
• Spearheaded full UI/UX design in Figma, ensuring clean, role-based interfaces for administrators, teachers, and students.
• Conducted manual QA flows for grading validation and daily attendance record edge cases.`,
      role: "Lead Project Coordinator & Architect",
      tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Figma"]
    },
    {
      id: 4,
      name: "Aung Thein Than Loyalty & Top-Up Platform",
      category: "E-Commerce / FinTech",
      company: "Digital Insects Co.,Ltd",
      timeline: "Apr 2026 – May 2026",
      type: "Mobile App & Real-Time Admin Dashboard",
      highlightMetric: "Real-Time Point Ledger & Cross-Platform Sync",
      shortDescription: "Loyalty point top-up ecosystem featuring a Flutter mobile app, real-time transaction backend, and intuitive admin portal.",
      longDescription: `Managed cross-functional development to build a high-reliability point top-up and customer reward ecosystem.

Key Engineering & Leadership Highlights:
• Authored UI/UX wireframes and final interactive prototypes in Figma, establishing core brand visual guidelines.
• Engineered Node.js micro-services handling real-time point adjustments, transaction ledgers, and audit trails.
• Managed junior developers, setting code standards, reviewing Pull Requests, and validating mobile/web integration flows.`,
      role: "Lead Developer, UI/UX Designer & Project Coordinator",
      tags: ["Node.js", "Express.js", "Flutter", "Figma", "REST APIs"]
    },
    {
      id: 5,
      name: "Money Exchange Management System",
      category: "E-Commerce / FinTech",
      company: "Digital Insects Co.,Ltd",
      timeline: "Jan 2026 – Apr 2026",
      type: "Transactional Financial Management Portal",
      highlightMetric: "Audited Role-Based Transaction Security",
      shortDescription: "Financial transaction platform auditing complex multi-party exchanges (Customer, Vendor, Sales, Purchases) with strict role access.",
      longDescription: `Bridged high-fidelity UI/UX design with strict backend API security architecture for a currency exchange management platform.

Key Engineering & Leadership Highlights:
• Designed scalable Figma component libraries for complex financial dashboards and data-dense tables.
• Enforced bulletproof API workflows with granular permission boundaries for sensitivity tiers.
• Spearheaded full manual QA engineering suite, stress-testing complex ledger balances and cross-currency exchange flows.`,
      role: "Lead UI/UX Designer & QA Engineering Director",
      tags: ["TypeScript", "React.js", "Laravel", "Figma", "QA Testing"]
    },
    {
      id: 6,
      name: "Interactive Live Streaming Platform",
      category: "Live / Media",
      company: "Digital Insects Co.,Ltd",
      timeline: "Nov 2023 – Dec 2025",
      type: "Twitch-Inspired Streaming & Communication Engine",
      highlightMetric: "Low-Latency WebSocket Chat & Broadcaster Tools",
      shortDescription: "Feature-rich live content platform supporting real-time chat feeds, dynamic subscriptions, and channel customization.",
      longDescription: `Engineered low-latency streaming frontends designed to handle concurrent live interactions and real-time state sync.

Key Engineering & Leadership Highlights:
• Integrated WebSockets for instant, bi-directional viewer chat interactions without UI thread lag.
• Built customizable streamer dashboards allowing real-time channel customization, subscriber tracking, and analytics.
• Deployed micro-frontends onto AWS EC2 and S3 with CloudFront CDN for global video asset delivery.`,
      role: "Senior Full-Stack Developer",
      tags: ["React.js", "WebSockets", "Node.js", "AWS EC2/S3", "Tailwind CSS"]
    }
  ];

  const categories = ['All', 'Enterprise / CRM', 'Real Estate & Maps', 'E-Commerce / FinTech', 'Live / Media'];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Mobile-First Navigation Header */}
      <nav className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">Win Win Maw</span>
          </div>
          
          {/* Horizontal scrollable nav links for small screens */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-medium overflow-x-auto no-scrollbar py-1">
            <a href="#about" className="text-slate-400 hover:text-indigo-400 transition whitespace-nowrap">About</a>
            <a href="#experience" className="text-slate-400 hover:text-indigo-400 transition whitespace-nowrap">Career</a>
            <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition whitespace-nowrap">Work</a>
            <a href="#skills" className="text-slate-400 hover:text-indigo-400 transition whitespace-nowrap">Tech Stack</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-12 border-b border-slate-800/60">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-semibold mb-6 border border-indigo-500/20 leading-tight">
          <Sparkles size={14} className="shrink-0" /> 
          <span>Open for International Remote & Relocation Roles</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
          Win Win Maw <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400">
            Lead Developer, Architect & Project Lead
          </span>
        </h1>
        
        <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mb-8 leading-relaxed">
          6 years of industrial software engineering experience spanning hands-on full-stack development (Next.js, React, Node, Laravel), Figma UI/UX design, AWS cloud deployments, end-to-end manual QA, and engineering team leadership.
        </p>

        {/* Quick Highlights Grid - Single column on small mobile, 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="p-3.5 sm:p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-xl sm:text-2xl font-bold text-indigo-400">6+ Years</div>
            <div className="text-xs text-slate-400 mt-0.5">Industrial Tech Experience</div>
          </div>
          <div className="p-3.5 sm:p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-xl sm:text-2xl font-bold text-teal-400">Next.js & React</div>
            <div className="text-xs text-slate-400 mt-0.5">Primary Technical Focus</div>
          </div>
          <div className="p-3.5 sm:p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-xl sm:text-2xl font-bold text-sky-400">Lead & Mentor</div>
            <div className="text-xs text-slate-400 mt-0.5">Team Leadership & QA Lead</div>
          </div>
          <div className="p-3.5 sm:p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="text-xl sm:text-2xl font-bold text-indigo-400">AWS & Edge</div>
            <div className="text-xs text-slate-400 mt-0.5">S3, EC2, Lambda@Edge</div>
          </div>
        </div>

        {/* Mobile-First Full Width Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <a 
            href="https://linkedin.com/in/winwinmaw01" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition shadow-lg shadow-indigo-600/20 text-sm"
          >
            <LinkIcon size={18} /> LinkedIn Profile
          </a>
          <a 
            href="https://github.com/WinWinMaw4" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium border border-slate-700 transition text-sm"
          >
            <GitBranch size={18} /> GitHub Profile
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* Career Progression Timeline */}
        <section id="experience">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Terminal className="text-indigo-400 shrink-0" size={22} /> Career Growth & Leadership Path
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8">Continuous 6-year progression at Digital Insects (formerly Axle Tech).</p>

          <div className="space-y-6 relative border-l-2 border-slate-800 ml-2 sm:ml-4 pl-4 sm:pl-6">
            
            {/* Role 1 */}
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[31px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-indigo-500 border-4 border-slate-950"></span>
              <div className="bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">Lead Project Coordinator, Manager & Mentor</h3>
                  <span className="self-start text-[11px] px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono">Sep 2024 – Present</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Directing engineering team initiatives, conducting end-to-end manual QA flow testing, orchestrating AWS cloud deployments (S3, Amplify, EC2), and mentoring junior developers on system design.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-slate-400 font-mono">
                  <span>• System Architecture</span>
                  <span>• Manual QA Lifecycle</span>
                  <span>• AWS Cloud</span>
                  <span>• Team Mentorship</span>
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[31px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
              <div className="bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">Senior Frontend Developer & UI/UX Specialist</h3>
                  <span className="self-start text-[11px] px-2.5 py-0.5 bg-slate-800 text-slate-400 rounded-full font-mono">Sep 2024 – Jul 2025</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Engineered modular Next.js / React interfaces, translated Figma/Adobe XD designs into pixel-perfect frontend code, and optimized web performance.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[31px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
              <div className="bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">Full-Stack Developer (React & Laravel)</h3>
                  <span className="self-start text-[11px] px-2.5 py-0.5 bg-slate-800 text-slate-400 rounded-full font-mono">Sep 2022 – Aug 2024</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Built full-stack applications leveraging React frontends paired with Laravel and Node.js backend APIs. Designed database structures and integrated dynamic UI flows.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Flagship Projects Section */}
        <section id="projects">
          <div className="flex flex-col mb-6 border-b border-slate-800 pb-6 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2">
                <FolderGit2 className="text-indigo-400 shrink-0" size={22} /> Flagship Engineering Case Studies
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">Selected high-impact platforms out of 13+ engineered solutions.</p>
            </div>

            {/* Touch-Friendly Horizontal Scroll Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition touch-manipulation min-h-[38px] ${
                    activeTab === cat 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-indigo-500/50 transition duration-300 p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-indigo-950/80 text-indigo-300 rounded border border-indigo-800/50">
                      {project.company} • {project.timeline}
                    </span>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition p-1" aria-label="Visit external link">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition mt-2 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-indigo-400/90 font-medium mb-3">{project.role}</p>

                  <div className="mb-4 p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-emerald-400 font-mono leading-snug">
                    ✦ {project.highlightMetric}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700/60 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full min-h-[44px] py-2.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition border border-slate-700/60 flex items-center justify-center gap-2 touch-manipulation"
                  >
                    <Layers size={14} /> Read Architecture & Case <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Grid */}
        <section id="skills">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Cpu className="text-indigo-400 shrink-0" size={22} /> Technical Stack & Expertise
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8">Modern full-stack technologies, design tools, and infrastructure practices.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillCategories.map((group) => (
              <div key={group.category} className="p-4 sm:p-5 bg-slate-900/40 rounded-xl border border-slate-800/80">
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3 sm:mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle size={14} className="text-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Language Certifications */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            Education & International Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <Award className="text-indigo-400 mb-3" size={26} />
              <h3 className="text-base sm:text-lg font-bold text-white">Bachelor of Science (B.Sc), Computer Science</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">Dagon University • Dec 2016 – Mar 2024</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Comprehensive training in software engineering ethics, data structures, algorithms, and computing solutions architecture.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <Globe className="text-indigo-400 mb-3" size={26} />
              <h3 className="text-base sm:text-lg font-bold text-white">Diploma in English & Career Communication</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">SLD College • Nov 2024 – Mar 2026</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                95% Project Performance, 90% Participation. Proficient in technical documentation and cross-border team collaboration.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Touch-optimized Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full transition min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            <span className="text-[11px] text-indigo-400 font-semibold uppercase tracking-wide">{selectedProject.company} • {selectedProject.timeline}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-1 pr-8">{selectedProject.name}</h3>
            <p className="text-xs text-slate-400 font-medium mb-4">{selectedProject.role}</p>
            
            <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm mb-6 whitespace-pre-line leading-relaxed border-t border-b border-slate-800 py-4">
              {selectedProject.longDescription}
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-3 pt-2">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition"
              >
                Close Case Study
              </button>
              
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition"
                >
                  Visit Production Application <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-slate-800 mt-16 sm:mt-20 text-center text-slate-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Win Win Maw. Built with Next.js, TypeScript & Tailwind CSS.
      </footer>
    </div>
  );
}