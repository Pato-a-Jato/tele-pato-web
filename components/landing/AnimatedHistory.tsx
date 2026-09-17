"use client";

import { useEffect, useRef } from "react";
import { milestones } from "@/lib/team";

export default function AnimatedHistory() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    timeline.dataset.enhanced = "true";
    const entries = Array.from(timeline.querySelectorAll<HTMLElement>("[data-history-entry]"));
    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("history-entry-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    entries.forEach((entry) => observer.observe(entry));

    let frame = 0;
    const updateProgress = () => {
      const bounds = timeline.getBoundingClientRect();
      const viewport = window.innerHeight;
      const travelled = viewport * 0.62 - bounds.top;
      const available = Math.max(bounds.height - viewport * 0.28, 1);
      const progress = Math.min(Math.max(travelled / available, 0), 1);
      timeline.style.setProperty("--history-progress", `${progress * 100}%`);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={timelineRef} className="history-timeline">
      <div className="history-track" aria-hidden="true">
        <span />
      </div>
      {milestones.map((milestone, index) => (
        <article
          key={`${milestone.year}-${milestone.title}`}
          className="history-entry"
          data-history-entry
          style={{ "--entry-delay": `${(index % 3) * 70}ms` } as React.CSSProperties}
        >
          <div className="history-node" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="history-content">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-sm font-bold text-[#FBCB04]">{milestone.year}</p>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
                {milestone.tag}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {milestone.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{milestone.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
