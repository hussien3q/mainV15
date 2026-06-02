"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Sun, Moon, Github, Instagram, Linkedin, Youtube,
  Send, Mail, Menu, X, ArrowUpRight, Sparkles, Trophy
} from "lucide-react";

/* ─── Animated Counter ─────────────────────────────────────────────────────── */
function CountUp({ endValue, suffix = "" }: { endValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done.current) return;
      done.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1600, 1);
        setCount(Math.floor(p * (2 - p) * endValue));
        if (p < 1) requestAnimationFrame(tick);
        else setCount(endValue);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [endValue]);
  return (
    <div ref={ref} className="brand-font text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text)] select-none">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

/* ─── Before / After drag slider ───────────────────────────────────────────── */
function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const cRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const move = (cx: number) => {
    if (!cRef.current) return;
    const r = cRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((cx - r.left) / r.width) * 100)));
  };
  return (
    <div
      ref={cRef}
      onMouseDown={() => (drag.current = true)}
      onMouseUp={() => (drag.current = false)}
      onMouseLeave={() => (drag.current = false)}
      onMouseMove={e => { if (drag.current) move(e.clientX); }}
      onTouchMove={e => { if (e.touches[0]) move(e.touches[0].clientX); }}
      onClick={e => move(e.clientX)}
      className="relative w-full aspect-[3/4] md:aspect-[4/3] touch-none select-none overflow-hidden rounded-2xl border border-[var(--border)] cursor-ew-resize group"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/after.jpg" alt="After transformation" className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute bottom-5 right-5 z-30 rounded-xl bg-black/85 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Today</span>
      </div>
      {/* BEFORE */}
      <div className="absolute inset-0 h-full overflow-hidden z-20 border-r-2 border-white/70" style={{ width: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/befor.jpg" alt="Before" className="absolute inset-0 h-full object-cover"
          style={{ width: cRef.current?.getBoundingClientRect().width ?? "100%" }} />
        <span className="absolute bottom-4 left-4 z-30 rounded-lg bg-black/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Year 1</span>
      </div>
      {/* Handle */}
      <div className="absolute top-0 bottom-0 z-30 w-0.5 bg-white shadow-2xl pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-white text-base shadow-xl transition-transform group-hover:scale-110">⇄</div>
      </div>
    </div>
  );
}

/* ─── Section Badge ─────────────────────────────────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[var(--accent)] mb-5">
      {children}
    </span>
  );
}

/* ─── Main ──────────────────────────────────────────────────────────────────── */
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const roles = [
    "Computer Engineering Student",
    "Front-end Developer",
    "Community Builder & IMPACTO Founder",
    "Digital Content Creator",
    "Disciplined Athlete",
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVis, setRoleVis] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleVis(false);
      setTimeout(() => { setRoleIdx(p => (p + 1) % roles.length); setRoleVis(true); }, 400);
    }, 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setFormStatus("loading");
    try {
      await new Promise(r => setTimeout(r, 1000));
      setFormStatus("success");
      setFeedback("");
    } catch { setFormStatus("error"); }
    setTimeout(() => setFormStatus("idle"), 3500);
  };

  if (!mounted) return null;
  const isDark = theme === "dark";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#impact", label: "Impact" },
    { href: "#content", label: "Content Creation" },
    { href: "#discipline", label: "Discipline" },
    { href: "#vision", label: "Vision" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 selection:bg-[var(--accent)] selection:text-white">

      {/* ══════════════════════════════════════════════════════════════════════
          NAVBAR — floating pill, gap above, spacious links
         ══════════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-8 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-7xl flex items-center justify-between bg-[var(--bg)]/95 backdrop-blur-md border border-[var(--border)] rounded-2xl px-6 md:px-10 h-[62px] shadow-sm transition-colors duration-300">

          {/* Brand */}
          <a href="#hero" onClick={() => setMenuOpen(false)}
            className="brand-font text-sm font-black tracking-[0.18em] text-[var(--text)] uppercase hover:text-[var(--accent)] transition-colors select-none">
            Hussein
          </a>

          {/* Desktop nav — wide gaps */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l, i) => (
              <span key={l.href} className="flex items-center gap-8">
                <a href={l.href}
                  className="text-[11px] font-bold uppercase tracking-widest text-[var(--text)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                  {l.label}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="text-[var(--text-3)] text-[8px] select-none leading-none">•</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text)] transition-all cursor-pointer"
              aria-label="Toggle theme">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button type="button" onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text)] transition-colors cursor-pointer"
              aria-label="Toggle menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-2xl font-black brand-font text-[var(--text)] border-b border-[var(--border)] pb-5 hover:text-[var(--accent)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-center text-[10px] text-[var(--text-3)] font-mono uppercase tracking-widest">
          © 2026 — Building in public from Baghdad
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT
         ══════════════════════════════════════════════════════════════════════ */}
      <main className="mx-auto max-w-7xl px-6 md:px-8">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-20 border-b border-[var(--border)]">

          {/* Kicker pill */}
          <div className="inline-flex items-center gap-2 border border-[var(--accent)]/30 bg-[var(--accent)]/5 rounded-full px-5 py-2 mb-12">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--accent)]">Open to Opportunities · Baghdad, Iraq</span>
          </div>

          {/* Giant headline — V1 brand-font locked */}
          <h1
            className="brand-font font-black leading-[0.9] tracking-tight select-none mb-10"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          >
            <span className="text-[var(--text)]">Who</span>{" "}
            <span className="text-[var(--accent)]">Am I</span>
            <span className="text-[var(--text)]"> ?</span>{" "}

          </h1>

          {/* Role cycle — V1 subtext scale */}
          <div className="min-h-[4rem] flex items-center justify-center mb-12 md:mb-16">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--text-2)] px-4">
              I&apos;m Hussein, a{" "}
              <span
                className={`inline-block font-black text-[var(--text)] border-b-[3px] border-[var(--accent)] pb-1 transition-all duration-400 ease-in-out ${roleVis ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-sm translate-y-2"
                  }`}
              >
                {roles[roleIdx]}
              </span>
            </p>
          </div>

          {/* CTAs — wide vertical gap above */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-24 w-full sm:w-auto px-8 sm:px-0">
            <a href="#projects"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-white w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-[0.15em] hover:bg-[var(--accent-dark)] transition-colors shadow-xl shadow-[var(--accent)]/20">
              View My Work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--text)] text-[var(--text)] w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-[0.15em] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              Get In Touch ☑
            </a>
          </div>

          {/* Scroll indicator — clear space below CTAs */}
          <div className="flex flex-col items-center gap-3 text-[var(--text-3)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Scroll to explore</span>
            <div className="h-8 w-px bg-[var(--border)] relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--accent)] animate-bounce" />
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ABOUT — The story so far.
           ╚══════════════════════════════════════════════════════════════════╝ */}
        <section id="about" className="scroll-mt-24 py-32 border-b border-[var(--border)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            <div className="lg:col-span-7 flex flex-col justify-center border border-[var(--border)] bg-[var(--bg-card)] rounded-3xl p-8 md:p-16 shadow-[var(--shadow)] bento-card-transition">

              <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--text)] mb-8 md:mb-10 leading-[1.05] md:leading-[1.02]">
                The story so far.
              </h2>
              <div className="space-y-8 text-[var(--text-2)] leading-[1.9] text-xl max-w-2xl">
                <p>
                  After high school, I stopped waiting for my life to change and started building it myself — through programming, volunteering, content creation, and discipline.
                </p>
                <p className="font-medium text-[var(--text)]">
                  I believe actions build proof, not words.
                </p>
              </div>
            </div>

            {/* Portrait */}
            <div className="lg:col-span-5 border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden group shadow-[var(--shadow)] bento-card-transition min-h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hreosec.png" alt="Hussein portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={e => { (e.target as HTMLImageElement).src = "/hreosec.jpg"; }} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-10">
            {[
              { val: 1, sx: "M+", label: "Content Views" },
              { val: 200, sx: "+", label: "IMPACTO Members" },
              { val: 150, sx: "+", label: "Volunteer Hours" },
              { val: 3, sx: "+ Yrs", label: "Continuous Training" },
            ].map(({ val, sx, label }) => (
              <div key={label} className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-5 md:p-8 flex flex-col items-center justify-center text-center shadow-[var(--shadow)] bento-card-transition">
                <CountUp endValue={val} suffix={sx} />
                <span className="mt-2 md:mt-3 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-[var(--text-3)]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              What I&apos;ve Built
            </h2>
          </div>

          {/* 2 × 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/sleep-calculator.jpg", badge: "Application",
                title: "Sleep Cycle Calculator",
                desc: "Built with HTML5, CSS3, JavaScript, PWA (Service Worker). Optimized UI preview frame.",
                href: "https://hussien3q.github.io/sleep-Calculator/",
              },
              {
                img: "/impacto-logo.JPG", badge: "Community Intel",
                title: "IMPACTO Platform",
                desc: "Founded a Telegram-based community providing verified scholarship and volunteer opportunities for 200+ active Iraqi youth.",
                href: "https://t.me/Impacto2",
              },
              {
                img: "/scholar-logo.JPG", badge: "Transparent Documentation",
                title: "Scholar Journey",
                desc: "A dedicated channel documenting the raw, real steps of applying for international scholarships from Iraq — covering paperwork, costs, timelines, and motivation letters.",
                href: "https://t.me/ScholarJourney1",
              },
              {
                img: "/quran-library.JPG", badge: "Audio-Visual Production",
                title: "Digital Educational Library",
                desc: "Built a YouTube and Telegram library for curriculum recitations, generating 7,000+ channel views and a viral short with 40,000+ views.",
                href: "https://youtube.com/@quran4student",
              },
            ].map(({ img, badge, title, desc, href }) => (
              <article key={title} className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden flex flex-col shadow-[var(--shadow)] bento-card-transition">
                <div className="w-full aspect-video overflow-hidden bg-[var(--bg-2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="brand-font text-xl md:text-2xl font-black text-[var(--text)] mb-3 md:mb-4 group-hover:text-[var(--accent)] transition-colors">{title}</h3>
                    <p className="text-[var(--text-2)] leading-relaxed text-sm md:text-base">{desc}</p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-[var(--border)]">
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-black text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
                      🔗 View Project <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── IMPACT & VOLUNTEERING ─────────────────────────── */}
        <section id="impact" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              Impact &amp; Volunteering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/Tedxu.jpg", role: "Speaker Experience (Time Reminder)",
                title: "TEDxUniversity of Technology Iraq",
                desc: "Managed speaker timing to ensure seamless event flow and strict adherence to the TEDx global schedule. Coordinated with the Speaker Experience team for 45+ days.",
                tags: ["+60K Views"],
                href: "https://www.instagram.com/p/DX1gW9Lsol0/",
              },
              {
                img: "/riv.jpg", role: "Field Volunteer & Content Creator",
                title: "Tigris River Cleanup Campaign (Al-Shawaka)",
                desc: "Executed field cleanup operations along the Tigris River banks. Aligned campaign activities with UN Sustainable Development Goals (SDGs 3, 6, 11, 13, and 17).",
                tags: ["+280K Views"],
                href: "https://www.instagram.com/p/DYCs75vMof9/",
              },
              {
                img: "/book.jpg", role: "Promotion & Logistics",
                title: "Baghdad International Book Fair (2025–2026)",
                desc: "Contributed to strategic promotional outreach, logistics, and digital media coverage to expand the book fair's reach to 500k+ visitors.",
                tags: ["+500k Visitors"],
                href: "#",
              },
              {
                img: "/him.jpg", role: "Event Organizer & Content Creator",
                title: "Himma Volunteer Team — University of Technology",
                desc: "Organized the CS graduation ceremony, managing seating, crowd flow, and event activities. Produced video and interviews, hitting 170,000+ combined views.",
                tags: ["+170k Views"],
                href: "https://www.instagram.com/p/DXIL5LnAGew/",
              },
            ].map(({ img, role, title, desc, tags, href }) => (
              <article key={title} className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden flex flex-col shadow-[var(--shadow)] bento-card-transition">
                <div className="w-full aspect-video overflow-hidden bg-[var(--bg-2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="brand-font text-xl md:text-2xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">{title}</h3>
                    <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4 block">{role}</span>
                    <p className="text-[var(--text-2)] leading-relaxed text-sm md:text-base mb-6">{desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {tags.map(t => (
                        <span key={t} className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-[0.15em] bg-[var(--bg-2)] border border-[var(--border)] text-[var(--text-2)] px-5 py-2.5 md:px-6 md:py-3 rounded-xl hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10 cursor-default">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-5 border-t border-[var(--border)]">
                    <a href={href} target={href === "#" ? undefined : "_blank"} rel="noopener noreferrer"
                      className="text-sm font-black text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
                      🎥 See the Reel
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CONTENT CREATION & MEDIA ──────────────────────── */}
        <section id="content" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              Content Creation &amp; Media
            </h2>
          </div>

          <div className="space-y-8">
            {/* Featured — text LEFT, photo RIGHT */}
            <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow)] bento-card-transition">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                {/* LEFT — text */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <Trophy className="h-8 w-8 md:h-10 md:w-10 text-[var(--accent)] shrink-0" />
                    <h3 className="brand-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[var(--text)] leading-tight uppercase tracking-wide">
                      University Content Creator Award
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-[var(--text-2)] leading-relaxed">
                    Awarded 2nd Place in the official college-wide competition for promoting volunteer culture & Best Purposeful Digital Content Creation.
                  </p>
                </div>
                {/* RIGHT — photo */}
                <div className="order-1 lg:order-2 aspect-video lg:aspect-auto relative group overflow-hidden min-h-[320px] bg-[var(--bg-2)] border-b lg:border-b-0 lg:border-l border-[var(--border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/creater.jpg" alt="Content Creator Award"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Bottom two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-[var(--shadow)] bento-card-transition">
                <div>
                  <div className="flex items-center gap-3 mb-5 md:mb-6">
                    <Youtube className="h-6 w-6 md:h-8 md:w-8 text-[var(--accent)] shrink-0" />
                    <h3 className="brand-font text-xl sm:text-2xl md:text-3xl font-black text-[var(--text)] uppercase tracking-widest">
                      YouTube Channels
                    </h3>
                  </div>
                  <p className="text-[var(--text-2)] leading-relaxed text-sm md:text-base">
                    Built a community of 3,000+ subscribers and generated 500,000+ total views delivering structured computer science and scholarship content.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-[var(--border)]">
                  <a href="https://www.youtube.com/@HusseinHayder1" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-black text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
                    Visit Channel <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
              <article className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-[var(--shadow)] bento-card-transition">
                <div>
                  <div className="flex items-center gap-3 mb-5 md:mb-6">
                    <Instagram className="h-6 w-6 md:h-8 md:w-8 text-[var(--accent)] shrink-0" />
                    <h3 className="brand-font text-xl sm:text-2xl md:text-3xl font-black text-[var(--text)] uppercase tracking-widest">
                      Instagram 
                    </h3>
                  </div>
                  <p className="text-[var(--text-2)] leading-relaxed text-sm md:text-base">
                    Grown an audience of 1,000+ followers and achieved 778,000+ views through short-form reels promoting volunteering culture and discipline in Baghdad.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-[var(--border)]">
                  <a href="https://www.instagram.com/h.h3hz/" target="_blank" rel="noopener noreferrer"
                    className="text-sm font-black text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">
                    Visit Profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS — large image 2×2 (V5 exact) ───── */}
        <section id="certifications" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              Certifications &amp; Training
            </h2>
          </div>

          {/* 2 × 2 large image cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cert 1 — CS50 */}
            <article className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow)] bento-card-transition flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/cs50.jpg" alt="CS50 Certificate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="brand-font text-xl font-black text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  CS50: Introduction to Computer Science
                </h3>
                <p className="text-sm text-[var(--text-3)] font-semibold">Harvard University</p>
              </div>
            </article>

            {/* Cert 2 — Laptop */}
            <article className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow)] bento-card-transition flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/laptop-repair.jpg" alt="Laptop Maintenance Certificate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="brand-font text-xl font-black text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Laptop Maintenance &amp; Repair Training
                </h3>
                <p className="text-sm text-[var(--text-3)] font-semibold">Caritas Czech Republic</p>
              </div>
            </article>

            {/* Cert 3 — Claude */}
            <article className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow)] bento-card-transition flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/claude-101.jpg" alt="Claude 101 Certificate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="brand-font text-xl font-black text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Claude 101: Prompt Engineering Foundations
                </h3>
                <p className="text-sm text-[var(--text-3)] font-semibold">Anthropic</p>
              </div>
            </article>

            {/* Cert 4 — McKinsey */}
            <article className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow)] bento-card-transition flex flex-col">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[var(--accent)]/10 to-[var(--bg-2)] flex flex-col items-center justify-center gap-4 border-b border-[var(--border)]">
                <div className="h-16 w-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/25">
                  <span className="text-2xl font-black text-white">M</span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">McKinsey &amp; Company</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1.5 rounded-full border border-[var(--accent)]/20">In Progress</span>
              </div>
              <div className="p-8">
                <h3 className="brand-font text-xl font-black text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Forward Program
                </h3>
                <p className="text-sm text-[var(--text-3)] font-semibold">McKinsey &amp; Company · Ongoing Training</p>
              </div>
            </article>
          </div>
        </section>

        {/* ── DISCIPLINE ────────────────────────────────────── */}
        <section id="discipline" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              Discipline
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Text — left */}
            <div className="lg:col-span-7 border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-16 flex flex-col justify-center shadow-[var(--shadow)] bento-card-transition">
              <h3 className="brand-font text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text)] mb-4 leading-tight">
                3+ Years of Consistency
              </h3>
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-[var(--accent)] mb-8 md:mb-10">
                Boxing · Calisthenics · Weights
              </p>
              <div className="space-y-6 md:space-y-8 text-[var(--text-2)] leading-[1.8] md:leading-[1.9] text-lg md:text-xl">
                <p>
                  I started training because I was bullied for my body and wanted to rebuild my confidence. Over the past 3+ years, I’ve lost more than 30kg through calisthenics, boxing, and discipline.
                </p>
                <p className="font-medium text-[var(--text)]">
                  The hardest part wasn’t training — it was learning that real change takes time, patience, and showing up even when you don’t feel like it.
                </p>
              </div>
            </div>

            {/* Before / After — right */}
            <div className="lg:col-span-5 border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-4 md:p-6 flex flex-col justify-center gap-4 shadow-[var(--shadow)] bento-card-transition">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--text-3)] text-center">
                Drag to compare · Year 1 vs Today
              </p>
              <BeforeAfterSlider />
            </div>
          </div>
        </section>

        {/* ── VISION ────────────────────────────────────────── */}
        <section id="vision" className="scroll-mt-32 py-32 border-b border-[var(--border)]">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              The Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎓",
                title: "Software Engineering Scholarship",
                body: "Secure a fully-funded undergraduate scholarship specializing in Software Engineering.",
              },
              {
                icon: "🤝",
                title: "Expanding Volunteer Culture",
                body: "Promote the culture of youth volunteerism in Iraq, leveraging digital content creation to reach and mobilize a massive nation-wide audience.",
              },
              {
                icon: "🥊",
                title: "Athletic Benchmarks",
                body: "Continuous progression in Boxing and Calisthenics, aiming to maintain a strict 12% body fat while mastering high-level skills.",
              },
              {
                icon: "💻",
                title: "Digital Products & Scaling",
                body: "Architect, build, and ship real-world software applications, expanding self-taught programming capabilities to solve modern digital problems.",
              },
            ].map(({ icon, title, body }) => (
              <article key={title}
                className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-[var(--shadow)] bento-card-transition overflow-hidden sm:aspect-square">
                {/* Icon contained — no overflow */}
                <div className="text-4xl mb-6 transition-colors duration-300">{icon}</div>
                <h3 className="brand-font text-lg font-black text-[var(--text)] mb-4 group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-32 py-32">
          <div className="mb-16">

            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-[1.05]">
              Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Social channels */}
            <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-14 flex flex-col shadow-[var(--shadow)] bento-card-transition">
              <h3 className="brand-font text-xl sm:text-2xl md:text-3xl font-black text-[var(--text)] mb-3">Direct Channels</h3>
              <p className="text-sm md:text-base text-[var(--text-2)] mb-8 md:mb-10">Reach out directly — I read everything.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/husseindaffaie/",
                    Icon: Linkedin, label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/hussien3q",
                    Icon: Github, label: "GitHub",
                  },
                  {
                    href: "https://www.instagram.com/h.h3hz/",
                    Icon: Instagram, label: "Instagram",
                  },
                  {
                    href: "https://www.youtube.com/@HusseinHayder1",
                    Icon: Youtube, label: "YouTube",
                  },
                  {
                    href: "https://t.me/Impacto2",
                    Icon: Send, label: "Telegram",
                  },
                  {
                    href: "mailto:hussein.hayder113@gmail.com",
                    Icon: Mail, label: "Email",
                  },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg)] px-4 py-3 md:px-5 md:py-4 rounded-xl hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all group">
                    <Icon className="h-4 w-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" />
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Feedback form */}
            <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-2xl p-8 md:p-14 flex flex-col shadow-[var(--shadow)] bento-card-transition">
              <h3 className="brand-font text-xl sm:text-2xl md:text-3xl font-black text-[var(--text)] mb-3">Say Something Real</h3>

              <form onSubmit={submit} className="flex flex-col gap-5 flex-1">
                <textarea
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  placeholder="Give feedback... Say something real"
                  rows={6}
                  required
                  className="w-full flex-1 resize-none rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-base text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-3)]"
                />
                <button type="submit" disabled={formStatus === "loading"}
                  className="w-full rounded-xl bg-[var(--text)] hover:bg-[var(--accent)] text-[var(--bg)] hover:text-white px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors disabled:opacity-60 cursor-pointer">
                  {formStatus === "loading" ? "Sending…" : "Send Message →"}
                </button>
              </form>

              {formStatus === "success" && (
                <p className="mt-5 text-sm font-bold text-[var(--accent)] flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Thank you for your feedback!
                </p>
              )}
              {formStatus === "error" && (
                <p className="mt-5 text-sm font-bold text-red-500">Could not send. Please try again later.</p>
              )}

              <div className="mt-8 flex justify-end">
                
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] py-12 bg-[var(--bg)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="brand-font text-sm font-black tracking-[0.15em] text-[var(--text)] uppercase">Hussein</p>
          <p className="text-sm text-[var(--text-3)]">
            © 2026 — Building in public from Baghdad
          </p>
          <a href="#hero"
            className="text-xs font-black uppercase tracking-widest text-[var(--text-2)] hover:text-[var(--accent)] transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
