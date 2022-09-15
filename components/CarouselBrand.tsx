import Image from 'next/image';

export interface CarouselBrandProps {
  src: string;
  alt: string;
  name: string;
  filter?: string;
}

const CarouselBrand = ({ src, alt, name, filter }: CarouselBrandProps) => {
  return (
    <div className="brand">
      <div className="carousel-image">
        <Image
          style={{
            filter: filter ? `${filter}` : undefined,
          }}
          className="brand-logo"
          src={`/../public/logos/${src}`}
          alt={alt}
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="contain"
          draggable={false}
          priority={true}
        ></Image>
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default CarouselBrand;
