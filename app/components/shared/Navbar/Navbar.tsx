"use client";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button/Button";
import { menuElements } from "../../../../helpers/menuElements";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMobile}>
        <Link href="/">
          <Image
            src="/assets/logo-bookmark.svg"
            alt="Bookmark Logo"
            width={148}
            height={25}
          />
        </Link>
        <div className={styles.navbarDesktop}>
          <div>
            {menuElements.map((element) => (
              <Link
                key={element.link}
                href={element.link}
                className={styles.navbarDesktopLink}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <div className={styles.navbarDesktopButton}>
            <Button buttonText="Login" variant="secondaryButton" fullWidth />
          </div>
        </div>
        {!menuOpen && (
          <div onClick={handleNav} className={styles.navbarMobileButton}>
            <Image
              src="/assets/icon-hamburger.svg"
              alt="Menu icon"
              width={0}
              height={0}
            />
          </div>
        )}
      </div>
      <div
        className={`${styles.navbarMobileMenu} ${
          menuOpen ? styles.navbarMobileMenuOpen : styles.navbarMobileMenuClosed
        }`}
      >
        <div className={styles.navbarMobileMenuWrapper}>
          <div>
            <div className={styles.navbarMobileHeader}>
              <div>
                <Link href="/">
                  <Image
                    src="/assets/logo-bookmark_fullWhite.svg"
                    alt="Bookmark Logo"
                    width={148}
                    height={25}
                  />
                </Link>
              </div>
              <button
                onClick={handleNav}
                className={styles.navbarMobileCloseButton}
              >
                <Image
                  src="/assets/icon-close.svg"
                  alt="Bookmark Logo"
                  width={0}
                  height={0}
                />
              </button>
            </div>

            <div className={styles.navbarMobileList}>
              {menuElements.map((element) => (
                <Link
                  key={element.link}
                  href={element.link}
                  onClick={handleNav}
                  className={styles.navbarMobileList_item}
                >
                  {element.title}
                </Link>
              ))}
              <Link href="/" className={styles.navbarMobileLogin_button}>
                LogIn
              </Link>
            </div>
          </div>
          <div className={styles.navbarMobileLinks}>
            <Image
              src="/assets/icon-facebook.svg"
              alt="Facebook Logo"
              width={22}
              height={22}
            />
            <Image
              src="/assets/icon-twitter.svg"
              alt="Twitter Logo"
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
