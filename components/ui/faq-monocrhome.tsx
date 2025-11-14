"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundShader from "./background-shader";
import { FAQSection, FAQItem, faqSections, faqs } from "./faq-data";

const INTRO_STYLE_ID = "faq1-animations";

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
        transition: all 0.2s ease;
        isolation: isolate;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        cursor: pointer;
      }
      .faq-section-pill:hover {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.45);
        color: rgba(15, 23, 42, 0.95);
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5);
      }
      .faq-section-pill--active {
        border-color: rgba(59, 130, 246, 0.6);
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.15) 100%);
        backdrop-filter: blur(20px) saturate(200%);
        -webkit-backdrop-filter: blur(20px) saturate(200%);
        color: rgba(15, 23, 42, 1);
        font-weight: 600;
        box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9);
      }
      .faq-section-pill--active:hover {
        border-color: rgba(59, 130, 246, 0.7);
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.2) 100%);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.95);
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
            <h2 className="text-3xl font-medium leading-[1.1] text-neutral-900 md:text-4xl lg:text-5xl tracking-tight">
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
                  // Prevent auto-scroll by preserving scroll position
                  const scrollY = window.scrollY;
                  setActiveSection(section.id);
                  setActiveIndex(null);
                  // Restore scroll position after state update
                  requestAnimationFrame(() => {
                    window.scrollTo(0, scrollY);
                  });
                }}
                className={`faq-section-pill ${isActive ? "faq-section-pill--active" : ""}`}
                aria-pressed={isActive}
              >
                {section.title}
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
                      className="relative flex w-full items-center gap-6 px-6 py-6 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500/40 md:px-8 md:py-7"
                    >
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-white transition-all duration-500 group-hover:scale-110 group-hover:border-blue-200 group-hover:shadow-md">
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

                      <h3 className="flex-1 text-lg font-semibold leading-tight text-neutral-900 sm:text-xl tracking-tight">
                        {item.question}
                      </h3>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden text-base leading-relaxed text-neutral-700 transition-[max-height] duration-500 ease-out ${
                        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-6 md:px-8 font-light">{item.answer}</p>
                    </div>
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
