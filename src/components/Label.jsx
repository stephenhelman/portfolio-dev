export default function Label({ children, required = false }) {
  return (
    <label
      className="text-xs tracking-widest uppercase text-white/30"
      style={{ fontFamily: "sans-serif" }}
    >
      {children}
      {required && <span className="text-[#f59e0b] ml-1">*</span>}
    </label>
  );
}
