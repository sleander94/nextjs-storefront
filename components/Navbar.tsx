import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <header id="header">
      <Image
        className="background-image"
        src="/images/purple-space.jpg"
        alt=""
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <div className="title">
          <Link href="/">
            <a>
              <Image
                className="logo"
                src="/logos/eclipse.png"
                alt=""
                width={60.16}
                height={64}
              />
            </a>
          </Link>
          <Link href="/">
            <h1>ECLIPSE CANNABIS COMPANY</h1>
          </Link>
        </div>
        {/* Desktop Menu */}
        <nav className="desktop">
          <Link className="menu-item" href="/">
            HOME
          </Link>
          <Link className="menu-item" href="/">
            MENU
          </Link>
          <Link className="menu-item" href="/brands">
            OUR BRANDS
          </Link>
          <Link className="menu-item" href="/contact">
            CONTACT US
          </Link>
          <a
            className="address"
            href="https://www.google.com/maps/place/Eclipse+Cannabis+Company/@40.0258735,-105.2870899,17z/data=!3m1!4b1!4m5!3m4!1s0x876bee9945ec4419:0x521980b3bd00abdd!8m2!3d40.0258735!4d-105.2849012"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              style={{
                filter:
                  'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
              }}
              src="/location.svg"
              alt="address"
              layout="fixed"
              width={20}
              height={20}
            />
            <p>
              933 ALPINE AVE, SUITE 2<br></br>
              BOULDER, CO 80304
            </p>
          </a>
        </nav>
        {/* Mobile Menu */}
        <Menu
          right
          width={200}
          isOpen={open}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
          <Link id="home-link" href="/">
            <div
              className="menu-item"
              onClick={() => {
                closeMenu();
              }}
            >
              <div className="background-gradient">
                <p>HOME</p>
              </div>
              <div className="image-container"></div>
            </div>
          </Link>
          <Link id="menu-link" href="/">
            <div
              className="menu-item"
              onClick={() => {
                closeMenu();
              }}
            >
              <div className="background-gradient">
                <p>MENU</p>
              </div>
              <div className="image-container"></div>
            </div>
          </Link>
          <Link id="brands-link" href="/brands">
            <div
              className="menu-item"
              onClick={() => {
                closeMenu();
              }}
            >
              <div className="background-gradient">
                <p>OUR BRANDS</p>
              </div>
              <div className="image-container"></div>
            </div>
          </Link>
          <Link id="contact-link" href="/contact">
            <div
              className="menu-item"
              onClick={() => {
                closeMenu();
              }}
            >
              <div className="background-gradient">
                <p>CONTACT US</p>
              </div>
              <div className="image-container"></div>
            </div>
          </Link>
          <a id="phone-link" href="tel:7204200782" className="menu-item">
            <div className="background-gradient">
              <Image
                style={{
                  filter:
                    'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
                }}
                src="/phone.svg"
                alt="phone"
                width={16}
                height={16}
              />
              <p>720.420.0782</p>
            </div>
            <div className="image-container"></div>
          </a>
          <a
            href="https://www.google.com/maps/place/Eclipse+Cannabis+Company/@40.0258735,-105.2870899,17z/data=!3m1!4b1!4m5!3m4!1s0x876bee9945ec4419:0x521980b3bd00abdd!8m2!3d40.0258735!4d-105.2849012"
            target="_blank"
            rel="noreferrer"
            id="address-link"
            className="menu-item"
          >
            <div className="background-gradient">
              <Image
                style={{
                  filter:
                    'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
                }}
                src="/location.svg"
                alt="address"
                width={16}
                height={16}
              />
              <p>
                933 ALPINE AVE<br></br>SUITE 2<br></br>
                BOULDER, CO 80304
              </p>
            </div>
            <div className="image-container"></div>
          </a>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
