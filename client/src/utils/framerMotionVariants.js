export const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // apply 'transition' with variants
    transition: {
      type: "spring",
    },
  },
  // 'exit' animation / animating routes
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};