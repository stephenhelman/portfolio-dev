import { useNavigate } from "react-router-dom";

export default function NavLink({ link, setMenuOpen }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setMenuOpen(false);
    navigate(link.link);
  };
  return (
    <button
      onClick={handleButtonClick}
      className="text-xs text-left tracking-widest uppercase text-white/50 hover:text-[#f59e0b] transition-colors duration-200 cursor-pointer"
      style={{ letterSpacing: "0.15em" }}
    >
      {link.label}
    </button>
  );
}
