'use client'

import styles from './header.module.css';
import Image from 'next/image';
import Logo from '../../image/dynamos.jpg';


export default function Header() {
    return (
        <div className={styles.all}>
            <Image src={Logo} alt="Logo" className={styles.logo} />
        </div>
    );
}

