import React, { useEffect, useRef, useState } from "react";
import MouseIcon from "../ui/images-and-icons/icons/MouseIcon";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export interface ScrollLinkedWordTyperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  /**
   * Determines the range between which the scroll animation takes effect.  For
   * example, passing [0.5, 1] will start the scroll animation after scrolling
   * through 50% of the block.
   */
  scrollAnimationRange?: [number, number];
}

const ScrollLinkedWordTyper = (props: ScrollLinkedWordTyperProps) => {
  const {
    text,
    scrollAnimationRange = [0, 1],
    className = "",
    ...restProps
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const words = text.split(" ");

  const [scrollPosition, setScrollPosition] = useState(0);

  const y = useTransform(scrollYProgress, scrollAnimationRange, [0, 1]);
  const wordIndex = useTransform(y, (value) =>
    Math.round(value * words.length)
  );
  useEffect(
    () =>
      wordIndex.onChange((latest) => {
        setScrollPosition(latest);
      }),
    [containerRef.current]
  );
  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        height: `${(words.length + 1) * 30}vh`,
      }}
      className={`relative ${className}`}
      {...restProps}
    >
      <div className="sticky h-screen top-0 flex justify-center items-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            className="mx-6 max-w-4xl text-3xl md:text-5xl text-center font-extrabold"
            custom={{
              delay: 1,
              duration: 1,
            }}
          >
            {words.map((item, index) => (
              <motion.span
                className={scrollPosition <= index ? "invisible" : ""}
                key={index}
              >
                {`${item} `}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="absolute flex items-center m-1.5 md:m-3 bottom-24 md:bottom-12 font-extrabold animate-pulse">
          <div className="animate-bounce">
            <MouseIcon className="mr-4" />
            <div className=""></div>
          </div>
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default ScrollLinkedWordTyper;
