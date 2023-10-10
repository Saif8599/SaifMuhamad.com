import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export interface TypeAnimationTextProps extends React.HTMLAttributes<HTMLDivElement> {}

const TypeAnimationText = (props: TypeAnimationTextProps) => {
  const { className = '', children, ...restProps } = props;

  return (
    <div className={`${className}`} {...restProps}>
       <TypeAnimation
      sequence={[
        'Saif', // Types 'Saif'
        1000, // Waits 1s
        'Saif Muhhamad', // Keeps 'Saif' and types 'Muhhamad'
        500, // Waits 0.5s
        'Saif Muhamad', // Keeps 'Saif' and
        3000, // Waits 3s
        '',
      ]}
      speed={20}
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
    </div>
  );
};

export default TypeAnimationText;
