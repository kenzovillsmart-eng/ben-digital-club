import React from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  showNav?: boolean;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ showNav = true }, ref) => {
    return (
      <header ref={ref} className={styles.header}>
        <div className={styles['header-inner']}>
          <div className={styles.brand}>
            <div className={styles['brand-mark']}>B</div>
            <span>BenDigitalClub</span>
          </div>

          {showNav && (
            <nav className={styles.nav} aria-label="Main navigation">
              <a href="#about">About</a>
              <a href="#join">Join</a>
            </nav>
          )}
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';
