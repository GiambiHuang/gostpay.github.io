import { Variants } from "framer-motion";

export const titleVariants: Variants = {
  offscreen: {
    y: 15,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.3
    }
  }
};

export const cardVariants: Variants = {
  offscreen: {
    x: 15,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
  }
};

export const cardContainerVariants: Variants = {
  onscreen: {
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    }
  }
};
