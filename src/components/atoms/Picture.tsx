import Image from 'next/image';
import cls from 'classnames';

const Picture = ({ src, alt, className = '', priority = false }: PictureProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cls(className)}
      layout="fill"
      objectFit="cover"
      priority={priority}
    />
  );
};

type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default Picture;
