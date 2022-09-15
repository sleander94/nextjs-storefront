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
        src="/../public/images/purple-space.jpg"
        alt="outer space background"
        layout="fill"
        priority={true}
      ></Image>
      <div className="content">
        <div className="title">
          <Link href="/">
            <a href="/">
              <Image
                src="/../public/logos/eclipse.png"
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
            Home
          </Link>
          <Link className="menu-item" href="/testpage">
            Test
          </Link>
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
              Home
            </div>
          </Link>
          <Link id="test-link" className="menu-item" href="/testpage">
            <div
              onClick={() => {
                closeMenu();
              }}
            >
              Test
            </div>
          </Link>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
