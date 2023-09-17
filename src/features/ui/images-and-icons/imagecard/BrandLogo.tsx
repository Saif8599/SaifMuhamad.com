import React from 'react';
import { withAssetsPath } from '../../../utils/url';

export type Brand =
  | 'centraal-beheer'
  | 'zilveren-kruis'
  | 'interpolis-glashelder'
  | 'eurocross-assistance'
  | 'syntruss';

export interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: Brand;
}

const getBrandImage = (brand: Brand) => {
  switch (brand) {
    case 'zilveren-kruis':
      return {
        id: 1,
        title: 'Zilveren kruis',
        url: withAssetsPath('/brand-logos/zilveren-kruis.png'),
      };
    case 'interpolis-glashelder':
      return {
        id: 2,
        title: 'Interpolis glashelder',
        url: withAssetsPath('/brand-logos/interpolis-glashelder.svg'),
      };
    case 'eurocross-assistance':
      return {
        id: 3,
        title: 'Eurocross assistance',
        url: withAssetsPath('/brand-logos/eurocross-assistance.png'),
      };
    case 'syntruss':
      return {
        id: 4,
        title: 'Syntrus',
        url: withAssetsPath('/brand-logos/syntrus.png'),
      };
    default:
      return null;
  }
};

const BrandLogo = (props: BrandLogoProps) => {
  const { brand, className = '', children, ...restProps } = props;

  const brandImage = getBrandImage(brand);

  if (!brandImage) {
    return null;
  }

  return (
    <div className={`${className}`} {...restProps}>
      <div
        className="h-16 lg:h-24 w-16 lg:w-24 p-4 bg-white bg-center bg-no-repeat rounded-full [background-size:75%] lg:[background-size:auto]"
        aria-label={brandImage.title}
        style={{ backgroundImage: `url(${brandImage.url})` }}
      />
    </div>
  );
};

export default BrandLogo;
