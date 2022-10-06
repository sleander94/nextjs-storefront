import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact">
      <Image
        className="background-image"
        src="/images/stars.png"
        layout="fill"
        alt=""
        priority
      ></Image>
      <div className="content">
        <h2>HOURS & CONTACT INFO</h2>
        <div className="contact-info">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.693730489984!2d-105.28623438817233!3d40.01305022229192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0013a2ffa5e8e9e!2sBoulder%20Creek%20Park!5e0!3m2!1sen!2sus!4v1665088932207!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-text">
            <div>
              <p>
                Open Everyday <br /> 9AM - 7PM
              </p>
            </div>
            <p>720.555.5555</p>
            <div>
              <p>
                101 Arapahoe Avenue
                <br />
                Boulder, CO 80302
              </p>
              <a
                href="https://www.google.com/maps/place/Boulder+Creek+Park/@40.0130502,-105.2862344,15.76z/data=!4m5!3m4!1s0x0:0xd0013a2ffa5e8e9e!8m2!3d40.0129569!4d-105.2935381"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
