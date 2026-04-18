import { APP_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function CTAButton({
  variant = "primary",
  size = "default",
  children = "Try TRI-HARDER",
  href = APP_URL,
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20",
    secondary:
      "border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white",
  };
  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {variant === "primary" && <ArrowRight size={16} />}
    </a>
  );
}
