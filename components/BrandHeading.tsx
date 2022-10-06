import Image from 'next/image';
import Link from 'next/link';

const BrandHeading = () => {
  return (
    <section id="brand-heading">
      <Image
        className="background-image"
        src="/images/stars.png"
        alt=""
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <h2>BOULDER&apos;S OUT OF THIS WORLD DISPENSARY</h2>
        <p>
          Exosphere Cannabis Company proves that when it comes to your cannabis
          experience, you indeed can have the best of both worlds: first-class
          quality and a fun, laidback spot to shop. Complete with a
          one-of-a-kind outer space-themed design and a team of knowledgeable
          cannabis experts, Exosphere Cannabis Company is the ultimate
          dispensary destination. Our mission has always been to provide
          premium-grade cannabis flower, concentrates, edibles, and more,
          offering a diverse mix of product types, price points, and brands to
          serve a wide range of consumer needs. Whether you&apos;re a first-time
          explorer or have been enjoying your cannabis journey for some time,
          our dispensary in Boulder will surely become a fast favorite.
        </p>
        <h3>AWARD WINNING SELECTION</h3>
        <p>
          Exosphere Cannabis Company carries a curated selection of products
          from the industry&apos;s best brands, top growers, and leading
          innovators. From the exotic to the well-known, our menu of cannabis
          flower has it all. Plus, no other dispensary in Colorado has a
          concentrate selection like ours. When you touch down at our
          recreational dispensary in Boulder, you can expect to find a massive
          collection of cannabis.
        </p>
        <div className="page-links">
          <Link href="/contact">
            <a href="">
              <div className="background-gradient">
                <p>Hours & Location</p>
              </div>
              <div className="image-container">
                <Image
                  className="button-image"
                  src="/images/stars.png"
                  alt=""
                  layout="fill"
                  priority={true}
                ></Image>
              </div>
            </a>
          </Link>
          <Link href="/brands">
            <a href="">
              <div className="background-gradient">
                <p>Our Brands</p>
              </div>
              <div className="image-container">
                <Image
                  className="button-image"
                  src="/images/stars.png"
                  alt=""
                  layout="fill"
                  priority={true}
                ></Image>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandHeading;
