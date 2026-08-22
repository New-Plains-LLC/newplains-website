import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  numeral: string;
  label: string;
  children: ReactNode;
  variant?: "parchment" | "ink" | "paper";
  className?: string;
};

const variantStyles = {
  parchment: "bg-[#F6EFE1] text-[#1A1814]",
  paper: "bg-[#FBF6EA] text-[#1A1814]",
  ink: "bg-[#1A1814] text-[#F6EFE1]",
};

export default function Section({
  id,
  numeral,
  label,
  children,
  variant = "parchment",
  className = "",
}: SectionProps) {
  const isInk = variant === "ink";
  return (
    <section
      id={id}
      className={`relative ${variantStyles[variant]} px-6 md:px-12 lg:px-16 py-20 md:py-28 ${className}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-4 md:gap-6 mb-12 md:mb-16">
          <span
            className={`marker ${
              isInk ? "text-[#C9A26B]" : "text-[#B08A3E]"
            }`}
          >
            {numeral}
          </span>
          <span
            className={`flex-1 h-px draw-rule ${
              isInk ? "bg-[rgba(201,162,107,0.4)]" : "bg-[rgba(26,24,20,0.18)]"
            }`}
          />
          <span
            className={`marker ${
              isInk ? "text-[#F6EFE1]/70" : "text-[#5B6470]"
            }`}
          >
            {label}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
