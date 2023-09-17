import React from 'react';

export interface TEMPLATEProps extends React.HTMLAttributes<HTMLDivElement> {}

const TEMPLATE = (props: TEMPLATEProps) => {
  const { className = '', children, ...restProps } = props;

  return (
    <div className={`${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default TEMPLATE;
