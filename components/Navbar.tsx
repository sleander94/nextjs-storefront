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
        alt="outer space background"
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <div className="title">
          <Link href="/">
            <a href="/">
              <Image
                src="/logos/eclipse.png"
                alt="eclipse logo"
                width={64}
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
          <a className="menu-item" href="/testpage">
            CALL US
          </a>
          <a
            className="address"
            href="https://www.google.com/maps/@40.0258735,-105.2870899,17z"
          >
            <Image
              style={{
                filter:
                  'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
              }}
              src="/location.svg"
              alt="eclipse logo"
              width={24}
              height={24}
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
          <Link id="home-link" className="menu-item" href="/">
            <div
              onClick={() => {
                closeMenu();
              }}
            >
              HOME
            </div>
          </Link>
          <Link id="menu-link" className="menu-item" href="/">
            <div
              onClick={() => {
                closeMenu();
              }}
            >
              MENU
            </div>
          </Link>
          <Link id="phone-link" className="menu-item" href="/">
            <div
              className="phone"
              onClick={() => {
                closeMenu();
              }}
            >
              CALL US
            </div>
          </Link>
          <Link id="address-link" className="menu-item" href="/">
            <div
              className="address"
              onClick={() => {
                closeMenu();
              }}
            >
              <Image
                style={{
                  filter:
                    'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
                }}
                src="/location.svg"
                alt="eclipse logo"
                width={24}
                height={24}
              />
              <p>
                933 ALPINE AVE<br></br>SUITE 2<br></br>
                BOULDER, CO 80304
              </p>
            </div>
          </Link>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
