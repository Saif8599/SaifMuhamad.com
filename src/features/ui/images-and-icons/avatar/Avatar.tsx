import { ImageJson } from '@/features/api-definitions/image';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * image contains the link to the users profile picture
   */
  image?: ImageJson;
}

const Avatar = (props: AvatarProps) => {
  const { image, className = '', ...restProps } = props;

  return (
    <div
      className={`inline-flex items-center justify-center min-h-[32px] min-w-[32px] ${
        image ? '' : 'text-white bg-pink-700'
      } rounded-full ${className}`}
      style={
        image && {
          backgroundImage: `url(${image.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }
      }
      {...restProps}
    />
  );
};

export default Avatar;
