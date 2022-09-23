import Image from 'next/image';

const Footer = () => {
  return (
    <section id="footer">
      <Image
        className="background-image"
        src="/images/purple-space.jpg"
        alt=""
        layout="fill"
      ></Image>
      <div className="content">
        <a className="phone" href="">
          <Image
            style={{
              filter:
                'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
            }}
            src="/phone.svg"
            alt="phone"
            width={20}
            height={20}
          />
          <p>720.420.0782</p>
        </a>
        <div className="title">
          <Image src="/logos/eclipse.png" alt="" width={36} height={36} />
          <h2>ECLIPSE CANNABIS COMPANY 2022</h2>
        </div>
        <a
          className="address"
          href="https://www.google.com/maps/@40.0258735,-105.2870899,17z"
        >
          <Image
            style={{
              filter:
                'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
            }}
            src="/location.svg"
            alt="address"
            width={20}
            height={20}
          />
          <p>
            933 ALPINE AVE, SUITE 2<br></br>
            BOULDER, CO 80304
          </p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
