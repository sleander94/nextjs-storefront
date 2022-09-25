import Image from 'next/image';
import Head from 'next/head';

export interface AgeVerifierProps {
  setIsOver21: Function;
}

const AgeVerifier = ({ setIsOver21 }: AgeVerifierProps) => {
  return (
    <>
      <Head>
        {' '}
        <title>Eclipse Cannabis Company | Voted Best Rec Selection</title>
        <meta
          name="description"
          content="Boulder's premier dispensary serving Colorado's best brands. Check out our huge selection of flower, concentrates, edibles, glass and more."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section id="age-verifier">
        <Image
          className="background-image"
          src="/images/stars.png"
          alt=""
          layout="fill"
          priority={true}
        ></Image>
        <div className="border">
          <div className="content">
            <div className="logo">
              <Image
                className="logo-image"
                src="/logos/eclipse.png"
                alt=""
                width={141}
                height={150}
                priority={true}
              ></Image>
              <div className="logo-text">
                <h3>ECLIPSE</h3>
                <h4>CANNABIS COMPANY</h4>
              </div>
            </div>
            <h2>AGE VERIFICATION REQUIRED</h2>
            <div className="order-actions">
              <button
                onClick={() => {
                  setIsOver21(true);
                  sessionStorage.setItem('eclipseOver21', 'true');
                }}
              >
                <div className="background-gradient">
                  <p>I&apos;m over 21</p>
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
              </button>
              <button onClick={() => history.back()}>
                <div className="background-gradient">
                  <p>I&apos;m under 21</p>
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
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgeVerifier;
