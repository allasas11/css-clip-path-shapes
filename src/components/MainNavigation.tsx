import styles from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <nav className={styles.mainNavigation}>
      <div className={styles.logoContainer}>
        <img src="/public/assets/Logo_1080x1080.svg" alt="Logo" className={styles.logoWrapper} />
      </div>
      <div className={styles.navigationContainer}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <a 
              className={styles.navigationLink} 
              href="/">Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;