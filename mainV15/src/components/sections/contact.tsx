"use client";

import { useState } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Youtube,
} from "lucide-react";
import { socialLinks } from "@/data/site-content";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
  telegram: Send,
  mail: Mail,
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!feedback.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Portfolio Visitor",
          email: "visitor@feedback.local",
          subject: "Portfolio Feedback",
          message: feedback.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFeedback("");
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="scroll-mt-28 py-6 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Contact
          </h2>
        </div>

        {/* Symmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Direct Channel Links */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 flex flex-col justify-between bento-card-transition shadow-[var(--shadow)]">
            <div>
              <h3 className="brand-font text-xl font-bold text-[var(--text)] mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-[var(--text-2)] mb-8">
                Feel free to reach out directly through any of these platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg)] p-4 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all group"
                  >
                    <Icon className="h-4 w-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Feedback Form */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 flex flex-col justify-between bento-card-transition shadow-[var(--shadow)]">
            <div>
              <h3 className="brand-font text-xl font-bold text-[var(--text)] mb-4">
                Say Something Real
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Give feedback... Say something real"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-lg bg-[var(--text)] hover:bg-[var(--accent)] text-[var(--bg)] hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-3 text-xs font-bold text-[var(--accent)]">
                  Thank you for your feedback!
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-xs font-bold text-red-500">
                  Could not send message. Try again later.
                </p>
              )}
            </div>

            {/* Status tag in bottom right */}
            <div className="mt-6 flex justify-end">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-md">
                Connected to his account
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
