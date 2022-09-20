import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero">
      <Image
        className="background-image"
        src="/images/blackmarble_2016_americas_composite.png"
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <div className="logo">
          <Image
            className="logo-image"
            src="/logos/eclipse.png"
            alt="eclipse logo"
            width={200}
            height={200}
            priority={true}
          ></Image>
          <div className="logo-text">
            <h3>ECLIPSE</h3>
            <h4>CANNABIS COMPANY</h4>
          </div>
        </div>
        <h2>VOTED BEST REC SELECTION</h2>
        <div className="order-actions">
          <Link href="/">
            <a href="" className="order-link">
              <div className="background-gradient">
                <p>Call Us</p>
              </div>
              <Image
                className="button-image"
                src="/images/stars.png"
                layout="fill"
                priority={true}
              ></Image>
            </a>
          </Link>
          <Link href="/">
            <a href="" className="order-link">
              <div className="background-gradient">
                <p>Order Online</p>
              </div>
              <Image
                className="button-image"
                src="/images/stars.png"
                layout="fill"
                priority={true}
              ></Image>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
