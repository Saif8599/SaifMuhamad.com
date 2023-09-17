import { ImageJson } from "../../../api-definitions/image";
import { Theme } from "../../../theme/themes";
import Card from "../../surfaces-and-overlays/card/Card";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import BrandLogo, { Brand } from "./BrandLogo";


export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: ImageJson;
  title: string;
  color?: Theme;
  brand?: Brand;
}

const ImageCard = (props: ImageCardProps) => {
  const {
    image,
    title,
    color = 'green',
    brand,
    className = '',
    children,
    ...restProps
  } = props;

  const colorClassName =
    color === 'green'
      ? 'bg-green-500'
      : color === 'purple'
      ? 'bg-purple-500'
      : color === 'blue'
      ? 'bg-blue-500'
      : color === 'yellow'
      ? 'bg-yellow-500'
      : color === 'lime'
      ? 'bg-lime-500'
      : color === 'amber'
      ? 'bg-amber-500'
      : 'bg-purple-500';

  const [shortTitle = title] = /^.{35}[^\s]*\s/.exec(title) || [];
  const [Title = title] = /^.{45}[^\s]*\s/.exec(title) || [];

  return (
    <Card
      aria-label={image.title}
      className={`relative flex flex-col items-stretch h-full rounded-2xl shadow-2xl ${className}`}
      {...restProps}
    >
      <div
        className="w-full flex-none h-72 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <div
        className={`relative flex-1 flex flex-col justify-between p-6 lg:pb-8 ${colorClassName}`}
      >
        {brand && (
          <BrandLogo
            brand={brand}
            className="absolute top-0 right-3 -translate-y-3/4"
          />
        )}
        <h3 className="text-2xl lg:text-3xl font-bold text-white">
          {title.length >= 60 ? (
            <>
              <span className="md:hidden">{shortTitle}...</span>
              <span className="hidden md:block">{Title}...</span>
            </>
          ) : (
            title
          )}
        </h3>
        <div className="flex items-center justify-end mt-6 text-white">
          <ChevronRightIcon />
        </div>
      </div>
    </Card>
  );
};

export default ImageCard;
