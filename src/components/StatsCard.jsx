import useCountUp from "../hooks/useCountUp";

export default function StatsCard({ stat, active, index }) {
  const count = useCountUp(stat.value, active, 1000 + index * 150);

  return (
    <div
      className="relative flex flex-col justify-between p-8 border border-white/5 bg-[#111] overflow-hidden group"
      style={{
        animation: active ? `fadeSlideUp 0.4s ease both` : "none",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* accent corner */}
      <div
        className="absolute top-0 left-0 w-12 h-1"
        style={{ background: stat.color }}
      />

      {/* glow */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${stat.color}, transparent 70%)`,
        }}
      />

      <div>
        <div
          className="text-5xl font-bold leading-none mb-1 tabular-nums flex items-center"
          style={{ fontFamily: "'Georgia', serif", color: stat.color }}
        >
          {count}
          {stat.suffix ? stat.suffix : ""}
        </div>
        <div
          className="text-base font-semibold text-white/80 mt-3 mb-1"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {stat.label}
        </div>
      </div>

      <div
        className="text-xs text-white/35 leading-snug"
        style={{ fontFamily: "sans-serif" }}
      >
        {stat.sub}
      </div>
    </div>
  );
}
