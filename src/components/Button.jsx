import { Link, useNavigate } from "react-router-dom";
import {
  BUTTON_SIZES,
  BUTTON_STYLES,
  ICON_CONFIG,
  ICON_STYLES,
} from "../utils/constants";

export function Button({ style, size, link, icon, label, iconPosition }) {
  const buttonSize = BUTTON_SIZES[size];
  const buttonStyle = BUTTON_STYLES[style];
  const Icon = ICON_CONFIG[icon];
  const iconStyle = ICON_STYLES[style];
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(link);
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`font-bold tracking-widest uppercase transition-colors duration-200 group flex items-center gap-4 cursor-pointer ${buttonSize} ${buttonStyle}`}
      style={{ fontFamily: "sans-serif", letterSpacing: "0.1em" }}
    >
      {iconPosition === "leading" && (
        <Icon size={18} className={`${iconStyle} transition-colors`} />
      )}
      {label}
      {iconPosition === "trailing" && (
        <Icon
          size={18}
          className={`${iconStyle} transition-colors group-hover:translate-x-1`}
        />
      )}
    </button>
  );
}
