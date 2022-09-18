import Image from 'next/image';

const Footer = () => {
  return (
    <section id="footer">
      <Image
        className="background-image"
        src="/../public/images/purple-space.jpg"
        alt="outer space background"
        layout="fill"
      ></Image>
      <div className="content">
        <h2></h2>
        <div className="title">
          <Image
            src="/../public/logos/eclipse.png"
            alt="eclipse logo"
            width={64}
            height={64}
          />
          <h2>ECLIPSE CANNABIS COMPANY 2022</h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;
