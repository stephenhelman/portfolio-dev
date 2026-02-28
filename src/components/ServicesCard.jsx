export default function ServicesCard({ service }) {
  return (
    <div className="bg-[#0e0e0e] p-10 hover:bg-[#141414] transition-colors duration-300 group">
      <div
        className="text-[#f59e0b]/30 text-6xl font-bold mb-6 group-hover:text-[#f59e0b]/50 transition-colors"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {service.number}
      </div>
      <h3
        className="text-2xl font-bold mb-3"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {service.title}
      </h3>
      <p
        className="text-white/40 text-sm leading-relaxed mb-6"
        style={{ fontFamily: "sans-serif" }}
      >
        {service.desc}
      </p>
      <span
        className="text-[#f59e0b] text-sm font-bold tracking-wide"
        style={{ fontFamily: "sans-serif" }}
      >
        {service.price}
      </span>
    </div>
  );
}
