import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <Image
        src="/images/stars.png"
        layout="fill"
        objectFit="cover"
        priority
      ></Image>
      <div className="content">
        <h2>HOURS & CONTACT INFO</h2>
        <div className="contact-info">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.2197237381824!2d-105.28708988434549!3d40.02587347941236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bee994f5aac63%3A0xd8bf4116136fa093!2s933%20Alpine%20Ave.%20suite%202%2C%20Boulder%2C%20CO%2080304!5e0!3m2!1sen!2sus!4v1663191291288!5m2!1sen!2sus"
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
            <p>720.420.0782</p>
            <div>
              <p>
                933 Alpine Ave, Suite 2<br />
                Boulder, CO 80304
              </p>
              <a
                href="https://www.google.com/maps/place/Eclipse+Cannabis+Company/@40.0258735,-105.2870899,17z/data=!3m1!4b1!4m5!3m4!1s0x876bee9945ec4419:0x521980b3bd00abdd!8m2!3d40.0258735!4d-105.2849012"
                target="_blank"
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
