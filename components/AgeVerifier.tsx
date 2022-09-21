import Image from 'next/image';

export interface AgeVerifierProps {
  setIsOver21: Function;
}

const AgeVerifier = ({ setIsOver21 }: AgeVerifierProps) => {
  return (
    <section id="age-verifier">
      <Image
        className="background-image"
        src="/images/stars.png"
        layout="fill"
        priority={true}
      ></Image>
      <div className="border">
        <div className="content">
          <div className="logo">
            <Image
              className="logo-image"
              src="/logos/eclipse.png"
              alt="eclipse logo"
              width={150}
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
                <p>I'm over 21</p>
              </div>
              <div className="image-container">
                <Image
                  className="button-image"
                  src="/images/stars.png"
                  layout="fill"
                  priority={true}
                ></Image>
              </div>
            </button>
            <button onClick={() => history.back()}>
              <div className="background-gradient">
                <p>I'm under 21</p>
              </div>
              <div className="image-container">
                <Image
                  className="button-image"
                  src="/images/stars.png"
                  layout="fill"
                  priority={true}
                ></Image>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeVerifier;
