import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => {
  const { className = '', children, ...restProps } = props;

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Card;
