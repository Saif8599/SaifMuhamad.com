import { CSSProperties } from 'react';
import { ImageJson } from '../api-definitions/image';

export const getBackgroundPosition = (image: ImageJson): CSSProperties => {
  return image?.focal_point
    ? {
        backgroundPosition: `${image.focal_point.x}% ${image.focal_point.y}%`,
      }
    : {
        backgroundPosition: '50% 50%',
      };
};
