import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  project: p,
  viewLive,
  placeholderHeading,
  placeholderCta,
}) {
  const [hovered, setHovered] = useState(false);

  if (p.placeholder) {
    return (
      <div className="border border-dashed border-white/10 p-12 text-center">
        <div
          className="text-white/20 text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: "sans-serif" }}
        >
          {placeholderHeading}
        </div>
        <div
          className="text-white/10 text-xs"
          style={{ fontFamily: "sans-serif" }}
        >
          {placeholderCta}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/5 overflow-hidden transition-all duration-500"
      style={{ borderColor: hovered ? p.color + "40" : undefined }}
    >
      {/* Header bar */}
      <div className="h-1" style={{ background: p.color }} />

      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs tracking-widest uppercase px-3 py-1 border"
                style={{
                  fontFamily: "sans-serif",
                  color: p.color,
                  borderColor: p.color + "40",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                }}
              >
                {p.tag}
              </span>
            </div>
            <div className="flex items-baseline gap-4 mb-3">
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {p.title}
              </h3>
              <span
                className="text-white/20 text-lg hidden md:block"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                / {p.subtitle}
              </span>
            </div>
            <p
              className="text-white/45 leading-relaxed max-w-2xl"
              style={{ fontFamily: "sans-serif", fontSize: "15px" }}
            >
              {p.desc}
            </p>
          </div>

          {p.live && (
            <a
              href={p.live}
              target="_blank"
              className="shrink-0 self-start tracking-widest uppercase px-6 py-3 transition-all duration-200 border group flex items-center gap-2"
              style={{
                fontSize: "14px",
                fontFamily: "sans-serif",
                letterSpacing: "0.12em",
                borderColor: hovered ? p.color : "rgba(255,255,255,0.1)",
                color: hovered ? p.color : "rgba(255,255,255,0.4)",
              }}
            >
              {viewLive}
              <ArrowRight
                size={16}
                className="transition-colors"
                style={{ color: hovered ? p.color : "rgba(255,255,255,0.4)" }}
              />
            </a>
          )}
        </div>

        {p.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 bg-white/5 text-white/30"
                style={{ fontFamily: "sans-serif" }}
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
