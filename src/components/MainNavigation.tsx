import { useState } from 'react';
import styles from "./MainNavigation.module.scss";

function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.mainNavigation}>
        <div className={styles.logoContainer}>
          <img src="/public/assets/Logo_1080x1080.svg" alt="Logo" className={styles.logoWrapper} />
        </div>
        
        <div className={styles.navigationContainer}>
          {/* Desktop Navigation */}
          <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
              <a className={styles.navigationLink} href="/">Home</a>
            </li>
            <li className={styles.navigationItem}>
              <a className={styles.navigationLink} href="/basic-clip-path">Basic Shapes</a>
            </li>
            <li className={styles.navigationItem}>
              <a className={styles.navigationLink} href="/complex-clip-path">Complex Shapes</a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.isOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.isOpen : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Full-Screen Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.isOpen : ''}`}>
        <ul className={styles.mobileMenuList}>
          <li className={styles.mobileMenuItem}>
            <a className={styles.mobileMenuLink} href="/" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className={styles.mobileMenuItem}>
            <a className={styles.mobileMenuLink} href="/basic-clip-path" onClick={closeMobileMenu}>
              Basic Shapes
            </a>
          </li>
          <li className={styles.mobileMenuItem}>
            <a className={styles.mobileMenuLink} href="/complex-clip-path" onClick={closeMobileMenu}>
              Complex Shapes
            </a>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default MainNavigation;