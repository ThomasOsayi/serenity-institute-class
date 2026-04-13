"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
};

export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {children}
    </MotionTag>
  );
}