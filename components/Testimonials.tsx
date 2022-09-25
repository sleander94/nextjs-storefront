import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Image
        className="background-image"
        src="/images/stars.png"
        alt=""
        layout="fill"
      ></Image>
      <div className="content">
        <h2>WE&apos;RE HIGHLY RECOMMENDED</h2>
        <div className="reviews">
          <div className="border">
            <div className="review">
              <p>
                &quot;Rylie, kyle, caleb are the best in town. If you&apos;re
                not getting concentrates and flower from here you are truly
                doing yourself a disservice. Check them out. I&apos;ve lived in
                Boulder 13 years this place is my go to.&quot;
              </p>
              <p className="sig">
                <span>-</span> Ronald W.
              </p>
            </div>
          </div>
          <div className="border">
            <div className="review">
              <p>
                &quot;Always a pleasure coming into eclipse! The staff team
                never fails to provide excellent customer service and knowledge
                on all products. I&apos;ve been coming here since I&apos;ve
                turned 21 and don&apos;t plan on making any other dispensary my
                go-to.&quot;
              </p>
              <p className="sig">
                <span>-</span> Jeremy S.
              </p>
            </div>
          </div>
          <div className="border">
            <div className="review">
              <p>
                &quot;Eclipse is, without a doubt in my mind, the best spot in
                Boulder! They have the best selection of flower and concentrates
                at the best prices, hands down. After discovering this gem, I
                refuse to go to any other dispo in Boulder.&quot;
              </p>
              <p className="sig">
                <span>-</span> Matthew W.
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Eclipse+Cannabis+Company/@40.0258889,-105.287186,17z/data=!4m7!3m6!1s0x0:0x521980b3bd00abdd!8m2!3d40.0258735!4d-105.2849012!9m1!1b1"
          target="_blank"
          rel="noreferrer"
          className="reviews-link"
        >
          <div className="background-gradient">
            <p>More Reviews</p>
          </div>
          <div className="image-container">
            <Image
              className="button-image"
              src="/images/stars.png"
              alt=""
              layout="fill"
            ></Image>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
