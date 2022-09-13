import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="order-actions">
      <Link href="/">Call Us</Link>
      <div className="logo">
        <Image
          src="/../public/logos/eclipse.png"
          alt="eclipse logo"
          width={200}
          height={200}
        ></Image>
        <div className="logo-text">
          <h2>ECLIPSE</h2>
          <h3>CANNABIS COMPANY</h3>
        </div>
      </div>
      <Link href="/">Order Online</Link>
    </div>
  );
};

export default Hero;
