"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundShader from "./background-shader";

const INTRO_STYLE_ID = "faq1-animations";

type FAQSection = "membership" | "volunteering" | "general";

const faqSections: { id: FAQSection; title: string }[] = [
  { id: "membership", title: "Membership" },
  { id: "volunteering", title: "Volunteering" },
  { id: "general", title: "General" },
];

const faqs: Record<FAQSection, Array<{ question: string; answer: string; meta?: string }>> = {
  membership: [
    {
      question: "What is an ASME member?",
      answer: "Answer to be added soon.",
      meta: "MEMBERSHIP",
    },
    {
      question: "Why should I become a member?",
      answer: "Answer to be added soon.",
      meta: "BENEFITS",
    },
    {
      question: "How do I become a member?",
      answer: "Answer to be added soon.",
      meta: "JOINING",
    },
    {
      question: "How does becoming a member benefit me?",
      answer: "Answer to be added soon.",
      meta: "BENEFITS",
    },
    {
      question: "Do I need to be a mechanical engineering student to join?",
      answer: "Answer to be added soon.",
      meta: "ELIGIBILITY",
    },
  ],
  volunteering: [
    {
      question: "What is an ASME volunteer?",
      answer: "Answer to be added soon.",
      meta: "VOLUNTEERING",
    },
    {
      question: "Why should I become a volunteer?",
      answer: "Answer to be added soon.",
      meta: "BENEFITS",
    },
    {
      question: "How do I become a volunteer?",
      answer: "Answer to be added soon.",
      meta: "JOINING",
    },
  ],
  general: [
    {
      question: "What kind of events does ASME organize? (e.g. workshops, competitions, company visits, guest lectures)",
      answer: "Answer to be added soon.",
      meta: "EVENTS",
    },
    {
      question: "Can I be both a volunteer and a member?",
      answer: "Answer to be added soon.",
      meta: "MEMBERSHIP",
    },
  ],
};

function FAQ1() {
  const [activeSection, setActiveSection] = useState<FAQSection>("membership");
  const [introReady, setIntroReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq1-fade-up {
        0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); }
        60% { filter: blur(0); }
        100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
      }
      @keyframes faq1-beam-spin {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes faq1-pulse {
        0% { transform: scale(0.7); opacity: 0.55; }
        60% { opacity: 0.1; }
        100% { transform: scale(1.25); opacity: 0; }
      }
      @keyframes faq1-meter {
        0%, 20% { transform: scaleX(0); transform-origin: left; }
        45%, 60% { transform: scaleX(1); transform-origin: left; }
        80%, 100% { transform: scaleX(0); transform-origin: right; }
      }
      @keyframes faq1-tick {
        0%, 30% { transform: translateX(-6px); opacity: 0.4; }
        50% { transform: translateX(2px); opacity: 1; }
        100% { transform: translateX(20px); opacity: 0; }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animated-gradient-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
        background: linear-gradient(135deg, rgba(147, 197, 253, 0.95) 0%, rgba(191, 219, 254, 0.85) 20%, rgba(219, 234, 254, 0.7) 40%, rgba(255, 255, 255, 0.75) 60%, rgba(219, 234, 254, 0.7) 80%, rgba(147, 197, 253, 0.95) 100%);
        background-size: 200% 200%;
        animation: gradient-shift 25s ease infinite;
        pointer-events: none;
      }
      .intro-section {
        position: relative;
        padding: 3rem 2rem;
        border-radius: 2rem;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.4) 100%);
        backdrop-filter: blur(24px) saturate(200%);
        -webkit-backdrop-filter: blur(24px) saturate(200%);
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.7), inset 0 -1px 0 rgba(59, 130, 246, 0.1);
      }
      .faq1-fade {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
        filter: blur(12px);
        transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
      }
      .faq1-fade--ready {
        animation: faq1-fade-up 860ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
      .faq-card-glass {
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(24px) saturate(180%);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4);
      }
      .faq-card-glass:hover {
        border-color: rgba(255, 255, 255, 0.4);
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5);
      }
      .faq-section-pill {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        color: rgba(15, 23, 42, 0.8);
        font-weight: 500;
        font-size: 0.875rem;
        letter-spacing: 0.025em;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        isolation: isolate;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
      }
      .faq-section-pill:hover {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.45);
        color: rgba(15, 23, 42, 0.95);
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5);
      }
      .faq-section-pill--active {
        border-color: rgba(59, 130, 246, 0.5);
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.12) 100%);
        backdrop-filter: blur(20px) saturate(200%);
        -webkit-backdrop-filter: blur(20px) saturate(200%);
        color: rgba(15, 23, 42, 1);
        font-weight: 600;
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 3px rgba(59, 130, 246, 0.3);
        transform: scale(1.08);
      }
      .faq-section-pill__beam,
      .faq-section-pill__pulse {
        position: absolute;
        inset: -110%;
        pointer-events: none;
        border-radius: 50%;
      }
      .faq-section-pill__beam {
        background: conic-gradient(from 180deg, rgba(59, 130, 246, 0.12), transparent 30%, rgba(96, 165, 250, 0.1) 58%, transparent 80%, rgba(59, 130, 246, 0.08));
        animation: faq1-beam-spin 20s linear infinite;
        opacity: 0.6;
      }
      .faq-section-pill--active .faq-section-pill__beam {
        opacity: 0.8;
        animation-duration: 15s;
      }
      .faq-section-pill__pulse {
        border: 1px solid currentColor;
        opacity: 0.2;
        animation: faq1-pulse 4s ease-out infinite;
      }
      .faq-section-pill--active .faq-section-pill__pulse {
        opacity: 0.3;
        animation-duration: 3s;
      }
      .faq-section-pill__meter {
        position: relative;
        flex: 1 1 auto;
        height: 1px;
        background: linear-gradient(90deg, transparent, currentColor 35%, transparent 85%);
        transform: scaleX(0);
        transform-origin: left;
        animation: faq1-meter 6s ease-in-out infinite;
        opacity: 0.6;
      }
      .faq-section-pill--active .faq-section-pill__meter {
        opacity: 0.8;
        animation-duration: 4s;
      }
      .faq-section-pill__tick {
        position: relative;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background: currentColor;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        animation: faq1-tick 3.5s ease-in-out infinite;
      }
      .faq-section-pill--active .faq-section-pill__tick {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        animation-duration: 2.5s;
      }
    `;

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setHasEntered(true);
      return;
    }

    let timeout: number;
    const onLoad = () => {
      timeout = window.setTimeout(() => setHasEntered(true), 120);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timeout);
    };
  }, []);

  const currentFaqs = faqs[activeSection];

  const toggleQuestion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Mesh gradient shader background - fixed and persistent */}
      <BackgroundShader />
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Main Content */}
      <section
        className={`relative z-[2] mx-auto flex max-w-4xl flex-col gap-16 px-6 py-8 lg:max-w-5xl lg:px-12 lg:py-16 ${
          hasEntered ? "faq1-fade--ready" : "faq1-fade"
        }`}
      >
        {/* Logo and Title Section - Integrated Elegantly */}
        <div className="flex flex-col items-center gap-8 pt-2">
          <div className="relative h-24 w-24 flex-shrink-0">
            <Image
              src="/af3263bf-1bd9-49a5-b582-37cce96ae8a6.png"
              alt="ASME Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight md:text-4xl lg:text-5xl">
              ASME Student Chapter
            </h1>
            <p className="text-lg text-neutral-600 font-medium md:text-xl">University of Jordan</p>
          </div>
        </div>

        {/* Intro Text Section */}
        <div className="intro-section space-y-6 text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-[1.1] text-neutral-900 md:text-5xl lg:text-6xl tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                Welcome to the ASME Student Chapter FAQ!
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-300" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-300" />
            </div>
          </div>
          <p className="text-xl leading-relaxed text-neutral-700 md:text-2xl font-normal max-w-3xl mx-auto">
            Here, you&apos;ll learn about the <span className="font-semibold text-blue-700">two main ways to get involved</span> — as a member or as a volunteer — along with answers to the most common questions students have about joining and participating in ASME.
          </p>
        </div>

        {/* Section Toggle Buttons - Pill Style with Animations */}
        <div className="flex flex-wrap gap-4 justify-center">
          {faqSections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setActiveSection(section.id);
                  setActiveIndex(null);
                }}
                className={`faq-section-pill ${isActive ? "faq-section-pill--active" : ""}`}
                aria-pressed={isActive}
              >
                <span className="faq-section-pill__beam" aria-hidden="true" />
                <span className="faq-section-pill__pulse" aria-hidden="true" />
                <span className="relative z-10 font-semibold">{section.title}</span>
                <span className="faq-section-pill__meter" aria-hidden="true" />
                <span className="faq-section-pill__tick" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="space-y-5">
          {currentFaqs.length === 0 ? (
            <div className="text-center py-16 text-neutral-500 text-lg">
              No FAQs available for this section.
            </div>
          ) : (
            <ul className="space-y-4">
              {currentFaqs.map((item, index) => {
                const open = activeIndex === index;
                const panelId = `faq-panel-${activeSection}-${index}`;
                const buttonId = `faq-trigger-${activeSection}-${index}`;

                return (
                  <li
                    key={`${activeSection}-${index}`}
                    className="group relative overflow-hidden rounded-2xl faq-card-glass transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5"
                    onMouseMove={setCardGlow}
                    onMouseLeave={clearCardGlow}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{
                        background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), rgba(59, 130, 246, 0.06), transparent 70%)`,
                      }}
                    />

                    <button
                      type="button"
                      id={buttonId}
                      aria-controls={panelId}
                      aria-expanded={open}
                      onClick={() => toggleQuestion(index)}
                      className="relative flex w-full items-start gap-6 px-6 py-6 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500/40 md:px-8 md:py-7"
                    >
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-white transition-all duration-500 group-hover:scale-110 group-hover:border-blue-200 group-hover:shadow-md mt-0.5">
                        <span
                          className={`pointer-events-none absolute inset-0 rounded-full border-2 border-blue-200 opacity-0 transition-opacity duration-300 ${
                            open ? "opacity-100 animate-ping" : ""
                          }`}
                        />
                        <svg
                          className={`relative h-5 w-5 text-blue-600 transition-transform duration-500 ${
                            open ? "rotate-45" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>

                      <div className="flex flex-1 flex-col gap-4 min-w-0">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <h3 className="text-lg font-semibold leading-tight text-neutral-900 sm:text-xl tracking-tight pt-0.5">
                            {item.question}
                          </h3>
                        </div>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`overflow-hidden text-base leading-relaxed text-neutral-700 transition-[max-height] duration-500 ease-out ${
                            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="pr-2 pb-2 font-light">{item.answer}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        <footer className="pt-16 pb-8 text-center">
          <p className="text-sm text-neutral-500 font-light">
            ASME Student Chapter • University of Jordan
          </p>
          <p className="text-xs text-neutral-400 mt-2 font-light tracking-wide">
            SETTING THE STANDARD
          </p>
        </footer>
      </section>
    </div>
  );
}

export default FAQ1;
export { FAQ1 };
