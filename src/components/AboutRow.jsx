import { ABOUT_CONFIG, ICON_CONFIG } from "../utils/constants";

export default function AboutRow({ row }) {
  const Icon = ICON_CONFIG[row.icon];
  return (
    <div className="flex gap-6 py-5 border-b border-white/5">
      <span
        className="text-[#f59e0b] text-xs tracking-widest uppercase w-28 shrink-0 pt-0.5 flex items-center gap-2"
        style={{ fontFamily: "sans-serif" }}
      >
        {row.label}
        <Icon size={14} className="text-[#f59e0b]" />
      </span>
      {row.values.map((value, i) => {
        return (
          <span
            key={i}
            className="text-white/50 text-sm"
            style={{ fontFamily: "sans-serif" }}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
