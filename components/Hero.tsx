import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero">
      <Image
        className="background-image"
        src="/../public/images/blackmarble_2016_americas_composite.png"
        layout="fill"
        priority
      ></Image>
      <div className="content">
        <div className="logo">
          <Image
            className="logo-image"
            src="/../public/logos/eclipse.png"
            alt="eclipse logo"
            width={200}
            height={200}
            priority
          ></Image>
          <div className="logo-text">
            <h3>ECLIPSE</h3>
            <h4>CANNABIS COMPANY</h4>
          </div>
        </div>
        <h2>VOTED BEST REC SELECTION</h2>
        <div className="order-actions">
          <Link href="/">
            <a href="">
              <Image
                className="button-image"
                src="/../public/images/stars.png"
                layout="fill"
                priority
              ></Image>
              <p>Call Us</p>
            </a>
          </Link>
          <Link href="/">
            <a href="">
              <Image
                className="button-image"
                src="/../public/images/stars.png"
                layout="fill"
                priority
              ></Image>
              <p>Order Online</p>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
