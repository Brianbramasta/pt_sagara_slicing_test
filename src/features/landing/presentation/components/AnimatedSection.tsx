import { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const { ref, isVisible } = useScrollAnimation({ delay });

  return (
    <section
      ref={isVisible ? undefined : ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
};