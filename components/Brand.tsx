import Image from 'next/image';

export interface CarouselBrandProps {
  src: string;
  name: string;
  link: string;
  filter?: string;
}

const Brand = ({ src, name, link, filter }: CarouselBrandProps) => {
  return (
    <a href={link} target="_blank" className="brand" id={name}>
      <div className="brand-image">
        <Image
          style={{
            filter: filter ? `${filter}` : undefined,
          }}
          className="brand-logo"
          src={`/logos/${src}`}
          alt=""
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="contain"
          draggable={false}
          priority={true}
        ></Image>
      </div>
      <h3>{name}</h3>
    </a>
  );
};

export default Brand;
