export const contentPageAnimationVariants = {
  hidden: {
    x: '100%',
    y: 0,
  },
  enter: {
    x: 0,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      type: 'tween',
    },
  },
  exit: {
    x: '100%',
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.8,
      type: 'tween',
    },
  },
};
