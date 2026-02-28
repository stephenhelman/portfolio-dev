import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import useLanguage from "../hooks/useLanguage";
import { contactTranslations } from "../utils/translations";
import Label from "../components/Label";

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  source: "",
  honeypot: "", // bot trap — never shown to users
};

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = contactTranslations[locale];
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [focused, setFocused] = useState(null);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.service) return;
    setStatus("loading");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        mode: "no-cors",
      });
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#111] border text-[#f0ece4] px-4 py-3 text-sm outline-none transition-all duration-200 ${
      focused === field ? "border-[#f59e0b]" : "border-white/10"
    }`;

  const inputProps = (field) => ({
    className: inputClass(field),
    style: { fontFamily: "sans-serif" },
    onFocus: () => setFocused(field),
    onBlur: () => setFocused(null),
  });

  const Label = ({ children }) => (
    <label
      className="text-xs tracking-widest uppercase text-white/30"
      style={{ fontFamily: "sans-serif" }}
    >
      {children}
    </label>
  );

  // ── Success screen ────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <section className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <CheckCircle size={48} className="text-[#f59e0b] mb-6" />
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {t.successHeading}
        </h2>
        <p
          className="text-white/40 text-base max-w-md leading-relaxed mb-8"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.successBody}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs tracking-widest uppercase text-[#f59e0b] border border-[#f59e0b]/30 px-6 py-3 hover:bg-[#f59e0b] hover:text-black transition-all duration-200"
          style={{ fontFamily: "sans-serif", letterSpacing: "0.1em" }}
        >
          {t.successReset}
        </button>
      </section>
    );
  }

  // ── Main form ─────────────────────────────────────────────────────────────
  return (
    <section
      id="contact"
      className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-start md:justify-center overflow-y-auto py-12 md:py-0"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <span
          className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "sans-serif" }}
        >
          {t.sectionLabel}
        </span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* ── Left col ───────────────────────────────────────────────────── */}
        <div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.headingLine1}
            <br />
            <span className="text-white/20">{t.headingLine2}</span>
          </h2>

          <p
            className="text-white/40 text-sm sm:text-base leading-relaxed mb-8"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.description}
          </p>

          {/* Direct contact */}
          <div className="flex flex-col gap-4 mb-8">
            <a
              href="mailto:stephen@operationprofitllc.com"
              className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200"
            >
              <Mail size={16} className="text-[#f59e0b] shrink-0" />
              <span className="text-sm" style={{ fontFamily: "sans-serif" }}>
                stephen@operationprofitllc.com
              </span>
            </a>
            <a
              href="tel:+19155415303"
              className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200"
            >
              <Phone size={16} className="text-[#f59e0b] shrink-0" />
              <span className="text-sm" style={{ fontFamily: "sans-serif" }}>
                (915) 541-5303
              </span>
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex flex-wrap gap-6 text-white/20 text-xs tracking-widest uppercase"
            style={{ fontFamily: "sans-serif" }}
          >
            <a
              href="https://github.com/stephenhelman"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 hover:text-[#f59e0b] transition-colors"
            >
              <Github
                size={14}
                className="group-hover:text-[#f59e0b] transition-colors shrink-0"
              />
              <span className="flex items-center gap-1">
                {t.github} <ExternalLink size={10} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/stephen-helman-dev/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 hover:text-[#f59e0b] transition-colors"
            >
              <Linkedin
                size={14}
                className="group-hover:text-[#f59e0b] transition-colors shrink-0"
              />
              <span className="flex items-center gap-1">
                {t.linkedin} <ExternalLink size={10} />
              </span>
            </a>
            <Link to="/" className="hover:text-[#f59e0b] transition-colors">
              Operation Profit LLC
            </Link>
          </div>
        </div>

        {/* ── Right col — form ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Honeypot — hidden from real users, bots fill it */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={update("honeypot")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label>
                {t.labelName}{" "}
                <span className="text-[#f59e0b]">{t.required}</span>
              </Label>
              <input
                type="text"
                placeholder={t.placeholderName}
                value={form.name}
                onChange={update("name")}
                {...inputProps("name")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>{t.labelPhone}</Label>
              <input
                type="tel"
                placeholder={t.placeholderPhone}
                value={form.phone}
                onChange={update("phone")}
                {...inputProps("phone")}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <Label>
              {t.labelEmail}{" "}
              <span className="text-[#f59e0b]">{t.required}</span>
            </Label>
            <input
              type="email"
              placeholder={t.placeholderEmail}
              value={form.email}
              onChange={update("email")}
              {...inputProps("email")}
            />
          </div>

          {/* Service */}
          <div className="flex flex-col gap-1">
            <Label>
              {t.labelService}{" "}
              <span className="text-[#f59e0b]">{t.required}</span>
            </Label>
            <select
              value={form.service}
              onChange={update("service")}
              {...inputProps("service")}
            >
              <option value="" disabled>
                {t.placeholderService}
              </option>
              {t.services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <Label>{t.labelMessage}</Label>
            <textarea
              rows={4}
              placeholder={t.placeholderMessage}
              value={form.message}
              onChange={update("message")}
              {...inputProps("message")}
              style={{ fontFamily: "sans-serif", resize: "none" }}
            />
          </div>

          {/* Source */}
          <div className="flex flex-col gap-1">
            <Label>{t.labelSource}</Label>
            <select
              value={form.source}
              onChange={update("source")}
              {...inputProps("source")}
            >
              <option value="" disabled>
                {t.placeholderSource}
              </option>
              {t.sources.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Error message */}
          {status === "error" && (
            <div
              className="flex items-center gap-2 text-red-400 text-sm"
              style={{ fontFamily: "sans-serif" }}
            >
              <AlertCircle size={14} />
              {t.errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={
              status === "loading" || !form.name || !form.email || !form.service
            }
            className="group flex items-center justify-center gap-3 bg-[#f59e0b] text-black font-bold text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ letterSpacing: "0.1em", fontFamily: "sans-serif" }}
          >
            {status === "loading" ? (
              <>
                <Loader size={16} className="animate-spin" />
                {t.submitLoading}
              </>
            ) : (
              <>
                <Send
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
                {t.submitIdle}
              </>
            )}
          </button>

          <p
            className="text-white/20 text-xs text-center"
            style={{ fontFamily: "sans-serif" }}
          >
            {t.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
