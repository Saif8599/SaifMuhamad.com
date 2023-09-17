import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Centers contents on the page, adds horizontal padding.
 */
const Container = (props: ContainerProps) => {
  const { className = '', children, ...restProps } = props;

  return (
    <div className={`max-w-3xl mx-auto px-4 ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
