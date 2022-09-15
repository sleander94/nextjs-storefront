import Link from 'next/link';
import Image from 'next/image';

export interface StoreCarouselLinkProps {
  src: string;
  alt: string;
  label: string;
  href: string;
  position?: string;
}

const StoreCarouselLink = ({
  src,
  alt,
  label,
  href,
  position,
}: StoreCarouselLinkProps) => {
  return (
    <div className="carousel-item">
      <Link href={href}>
        <a href={href}>
          <div className="carousel-image">
            <Image
              style={{ filter: 'brightness(60%)' }}
              src={src}
              alt={alt}
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition={position ? position : '0% 0%'}
            ></Image>
          </div>
          <div className="hover-gradient">
            <p className="carousel-text">{label}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default StoreCarouselLink;
