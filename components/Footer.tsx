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
          <p>720.555.5555</p>
        </a>
        <div className="title">
          <Image src="/logos/eclipse.png" alt="" width={36} height={36} />
          <h2>EXOSPHERE CANNABIS COMPANY 2022</h2>
        </div>
        <a
          className="address"
          href="https://www.google.com/maps/place/Boulder+Creek+Park/@40.0130502,-105.2862344,15.76z/data=!4m5!3m4!1s0x0:0xd0013a2ffa5e8e9e!8m2!3d40.0129569!4d-105.2935381"
        >
          <Image
            style={{
              filter:
                'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
            }}
            src="/location.svg"
            alt="address"
            width={18.8}
            height={20}
          />
          <p>
            101 Arapahoe Avenue
            <br />
            Boulder, CO 80302
          </p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
