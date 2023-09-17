import React from 'react';
import { ImageJson } from '../../../api-definitions/image';
import { getBackgroundPosition } from '../../../utils/getBackgroundPosition';

export interface CoverImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: ImageJson;
}

const CoverImage = (props: CoverImageProps) => {
  const { image, children, className = '', ...restProps } = props;

  return (
    <div
      className={`min-h-screen flex w-full bg-cover bg-no-repeat bg-center ${className}`}
      aria-label={image.title}
      style={{
        backgroundImage: `url(${image.url})`,
        ...getBackgroundPosition(image),
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default CoverImage;
