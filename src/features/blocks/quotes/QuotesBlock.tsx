import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverImage from '../../ui/images-and-icons/cover-image/CoverImage';
import { ImageJson } from '../../api-definitions/image';
import ChevronLeftIcon from '../../ui/images-and-icons/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../ui/images-and-icons/icons/ChevronRightIcon';

export interface QuoteItemJson {
  id: number;
  quote: string;
  author: {
    name: string;
    job_title: string;
  };
  time: string;
  image: ImageJson;
}

export declare interface QuotesBlockJson {
  quotes: QuoteItemJson[];
}

export interface QuotesBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: QuotesBlockJson;
}

const QuotesBlock = (props: QuotesBlockProps) => {
  const { data, className = '', ...restProps } = props;

  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((current + 1) % data.quotes.length);
  };

  const goPrev = () => {
    setCurrent((current - 1 + data.quotes.length) % data.quotes.length);
  };

  const fadeInOutAnimationVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className={`relative text-white text-center lg:text-left bg-gray-900 ${className}`}
      {...restProps}
    >
      <AnimatePresence initial={false} mode="wait">
        {data.quotes.map(
          (quote, index) =>
            current === index && (
              <motion.div
                key={quote.id}
                variants={fadeInOutAnimationVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <CoverImage
                  image={quote.image}
                  className="pt-24 pb-20 lg:pt-44 lg:pb-36 px-4 sm:px-12 lg:px-40"
                >
                  <div className="relative z-20 self-auto lg:self-start flex flex-col max-w-4xl">
                    <div className="lg:max-w-xl">
                      <div className="relative text-3xl md:text-5xl font-medium font-serif">
                        <div className="lg:absolute lg:top-3 lg:-left-3 inline-flex text-purple-300 lg:text-[128px] lg:-translate-x-full">
                          &quot;
                        </div>
                        {quote.quote}&quot;
                      </div>
                      <div className="mt-8 lg:mt-12 text-xl lg:text-2xl font-bold">
                        {quote.author.name}
                      </div>
                      <div className="mt-1 font-roboto">
                        {quote.author.job_title}
                      </div>
                    </div>
                  </div>
                </CoverImage>
              </motion.div>
            ),
        )}
      </AnimatePresence>
      <div className="absolute inset-0 lg:hidden w-full h-full bg-neutral-900/50" />
      <div className="absolute left-1/2 bottom-24 z-20 w-full lg:w-max px-4 -translate-x-1/2">
        <div className="flex mx-auto mt-4 py-4 lg:py-0 px-8 lg:px-0 max-w-xs lg:max-w-none bg-purple-500 lg:bg-transparent rounded-full lg:rounded-md md:shadow-md overflow-hidden">
          <button
            className="inline-flex items-center justify-center lg:hidden pr-4 border-r border-gray-500"
            onClick={() => goPrev()}
          >
            <ChevronLeftIcon />
          </button>
          {data.quotes.map((quote, index) => (
            <button
              key={quote.id}
              className={`inline-flex items-center justify-center lg:-mx-px lg:py-4 lg:px-8 font-bold ${
                current === index
                  ? 'flex-1 lg:flex-initial text-gray-50 bg-purple-500'
                  : 'hidden lg:inline-flex text-purple-500 bg-gray-50'
              }`}
              onClick={() => setCurrent(index)}
            >
              {quote.time}
            </button>
          ))}
          <button
            className="inline-flex items-center justify-center lg:hidden pl-4 border-l border-gray-500"
            onClick={() => goNext()}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotesBlock;
