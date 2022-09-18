import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';

const Contact = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation');
          return;
        }
      });
    });

    if (titleRef.current) observer.observe(titleRef.current);
    if (addressRef.current) observer.observe(addressRef.current);
    if (hoursRef.current) observer.observe(hoursRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
  }, []);
  return (
    <section id="contact">
      <Parallax speed={20} className="background-image">
        <Image
          src="/../public/images/galaxy-gafb533421_1920.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 80%"
          priority
        ></Image>
      </Parallax>
      <div className="content">
        <h2 ref={titleRef}>CONTACT US</h2>
        <div ref={addressRef} className="address">
          <h3>ADDRESS</h3>
          <h4>
            933 ALPINE AVE, SUITE 2<br></br>
            BOULDER, CO 80304
          </h4>
        </div>
        <div ref={hoursRef} className="hours">
          <h3>HOURS</h3>
          <h4>
            9AM <span>-</span> 7PM<br></br>7 DAYS A WEEK
          </h4>
        </div>
        <div ref={phoneRef} className="phone">
          <h3>PHONE</h3>
          <h4>
            (720) 420<span>-</span>0782
          </h4>
        </div>
        <iframe
          ref={mapRef}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.2197237381824!2d-105.28708988434549!3d40.02587347941236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bee994f5aac63%3A0xd8bf4116136fa093!2s933%20Alpine%20Ave.%20suite%202%2C%20Boulder%2C%20CO%2080304!5e0!3m2!1sen!2sus!4v1663191291288!5m2!1sen!2sus"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
