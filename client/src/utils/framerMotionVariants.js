export const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // apply 'transition' with variants
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
  // 'exit' animation / animating routes
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};