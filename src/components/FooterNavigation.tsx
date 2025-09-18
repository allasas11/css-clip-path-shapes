import styles from "./FooterNavigation.module.scss";

function FooterNavigation() {
  return (
    <footer className={styles.footerNavigation}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>@All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default FooterNavigation;