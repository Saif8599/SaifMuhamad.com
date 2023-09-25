import React, { useState } from 'react';
import { contentPageAnimationVariants } from '../../ui/animations';
import { motion } from 'framer-motion';
import AboutBlock from '../about/AboutBlock';

export interface AnimationBlockProps extends React.HTMLAttributes<HTMLDivElement> {

}

const AnimationBlock = (props: AnimationBlockProps) => {
  const { className = "", ...restProps } = props;

  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${className}`} {...restProps}>
      <div>
        <button onClick={handleButtonClick}>Toggle Animation</button>
        <motion.div
          className="content"
          initial="hidden"
          animate={isVisible ? "enter" : "hidden"}
          exit="exit"
          variants={contentPageAnimationVariants}
        >
          <AboutBlock data={{title: 'Hello', description: 'dit is de hidden content', buttonText: 'click me'}}/>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimationBlock;
