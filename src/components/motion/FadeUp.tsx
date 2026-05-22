import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

export default function FadeUp({ children, delay = 0, className, as: Tag = "div" }: FadeUpProps) {
  return (
    <Tag className={`fade-up ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </Tag>
  );
}
