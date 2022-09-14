import Image from 'next/image';
import { useEffect, useRef } from 'react';

const BrandHeading = () => {
  const nugRef = useRef<HTMLDivElement>(null);
  const waxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation');
          return;
        }
        entry.target.classList.remove('animation');
      });
    });

    if (nugRef.current) observer.observe(nugRef.current);
    if (waxRef.current) observer.observe(waxRef.current);
    if (textRef.current) observer.observe(textRef.current);
  }, []);

  return (
    <section id="brand-heading">
      <Image
        className="background-image"
        src="/../public/images/stars.png"
        layout="fill"
      ></Image>
      <div className="content">
        <div className="brand-images">
          <div className="image-ref nug-png" ref={nugRef}>
            <Image
              id="nug-png"
              className="nug"
              src="/../public/images/nug.png"
              width={319}
              height={491}
            ></Image>
          </div>
          {/*       <div className="image-ref wax-png" ref={waxRef}>
            <Image
              id="wax-png"
              className="wax"
              src="/../public/images/wax.png"
              width={263}
              height={222.5}
            ></Image>
          </div> */}
        </div>
        <div className="brand-text" ref={textRef}>
          <h2>OUT OF THIS WORLD</h2>
          <h2>CANNABIS</h2>
          <p>
            When you touch down at Eclipse Cannabis Company, you'll find an
            experience like no other. Our Boulder recreational dispensary offers
            first class quality products in a laidback, outer space-themed shop.
            Are you ready for an adventure?
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandHeading;
