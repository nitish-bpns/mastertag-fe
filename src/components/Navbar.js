import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavFoot.module.css';

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div>
                    <Link to="/" className={styles.logo}>
                        <img src='./../logo.svg' alt='logo' />
                    </Link>
                    <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
                    <label className={styles.menuIcon} htmlFor={styles.menuBtn}>
                        <span className={styles.navicon}></span>
                    </label>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/how">How it Works</Link>
                        </li>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop Now</Link>
                        </li>
                    </ul>
                </div>

            </nav>


        </div>
    )
}

export default Navbar;