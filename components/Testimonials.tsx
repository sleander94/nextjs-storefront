import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Image
        className="background-image"
        src="/images/stars.png"
        layout="fill"
      ></Image>
      <div className="content">
        <h2>WE ARE HIGHLY RECOMMENDED</h2>
        <div className="reviews">
          <div className="review">
            <p>
              "Rylie, kyle, caleb are the best in town. If you’re not getting
              concentrates and flower from here you are truly doing yourself a
              disservice. Check them out. I’ve lived in Boulder 13 years this
              place is my go to.
            </p>
            <p className="sig">
              <span>-</span> Ronald W.
            </p>
          </div>
          <div className="review">
            <p>
              "Always a pleasure coming into eclipse! The staff team never fails
              to provide excellent customer service and knowledge on all
              products. I’ve been coming here since I’ve turned 21 and don’t
              plan on making any other dispensary my go-to."{' '}
            </p>
            <p className="sig">
              <span>-</span> Jeremy S.
            </p>
          </div>
          <div className="review">
            <p>
              "Eclipse is, without a doubt in my mind, the best spot in Boulder!
              They have the best selection of flower and concentrates at the
              best prices, hands down. After discovering this gem, I refuse to
              go to any other dispo in Boulder."
            </p>
            <p className="sig">
              <span>-</span> Matthew W.
            </p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Eclipse+Cannabis+Company/@40.0258889,-105.287186,17z/data=!4m7!3m6!1s0x0:0x521980b3bd00abdd!8m2!3d40.0258735!4d-105.2849012!9m1!1b1"
          target="_blank"
          className="reviews-link"
        >
          <div className="background-gradient">
            <p>More Reviews</p>
          </div>
          <Image
            className="button-image"
            src="/images/stars.png"
            layout="fill"
          ></Image>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
