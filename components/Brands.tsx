import Image from 'next/image';
import Link from 'next/link';
import Brand from './Brand';

const Brands = () => {
  return (
    <section id="brands">
      <Image
        className="background-image"
        src="/images/stars.png"
        alt=""
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <h2>OUR BRANDS</h2>
        <p>
          We proudly carry the following brands. Don&apos;t see your favorite?
          Let us know! We&apos;re alway looking for great new products.
        </p>
        <div className="order-actions">
          <Link href="/">
            <a href="" className="order-link">
              <div className="background-gradient">
                <p>Call Us</p>
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
          <Link href="/">
            <a href="" className="order-link">
              <div className="background-gradient">
                <p>View Menu</p>
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
        <div className="brands">
          <Brand
            src="710-logo.png"
            name="710 Labs"
            link="https://710lahttps://710labs.com/bs.com/"
            filter="invert(100%) sepia(0%) saturate(7483%) hue-rotate(238deg) brightness(105%) contrast(105%)"
          />
          <Brand
            src="snaxland-logo.webp"
            name="Snaxland"
            link="https://snaxland.com/"
          />
          <Brand
            src="lazercat-logo.png"
            name="Lazercat"
            link="https://lazercatcannabis.com/"
          />
          <Brand
            src="cuban-crew-logo.png"
            name="Cuban Crew"
            link="https://www.krystaleaves.com/cuban-crew-colorado"
            filter="invert(99%) sepia(2%) saturate(14%) hue-rotate(188deg) brightness(106%) contrast(100%)"
          />
          <Brand
            src="wana-logo.png"
            name="Wana"
            link="https://www.wanabrands.com/"
          />
          <Brand
            src="locol-love-logo.png"
            name="Locol Love"
            link="https://locol-love.com/"
          />
          <Brand
            src="seven-five-logo.png"
            name="Seven Five"
            link="https://sevenfivefarm.com/"
          />
          <Brand
            src="indico-logo.png"
            name="Indico Colorado"
            link="https://indicocolorado.com/"
            filter="invert(99%) sepia(2%) saturate(14%) hue-rotate(188deg) brightness(106%) contrast(100%)"
          />
          <Brand
            src="bloom-county-logo.png"
            name="Blooom County"
            link="https://bloomcountycolorado.com/"
          />
          <Brand
            src="leiffa-logo.png"
            name="Leiffa"
            link="https://leiffa.com/"
          />
          <Brand
            src="coda-logo.png"
            name="Coda Signatures"
            link="https://codasignature.com/"
          />
          <Brand
            src="antero-logo.png"
            name="Antero Sciences"
            link="https://www.anterosciences.com/"
          />
          <Brand
            src="outlaw-logo.png"
            name="Outlaw"
            link="https://outlawcannabis.co/"
            filter="invert(99%) sepia(2%) saturate(14%) hue-rotate(188deg) brightness(106%) contrast(100%)"
          />
          <Brand src="dialedin-logo.png" name="Dialed In" link="" />
          <Brand
            src="binkse-logo.png"
            name="Binkse"
            link="https://www.binske.com/"
            filter="invert(99%) sepia(2%) saturate(14%) hue-rotate(188deg) brightness(106%) contrast(100%)"
          />
          <Brand
            src="greendot-logo.webp"
            name="Green Dot"
            link="https://www.greendotlabs.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
