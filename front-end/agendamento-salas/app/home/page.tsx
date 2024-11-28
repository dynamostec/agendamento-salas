'use client';

import React from 'react';
import styles from '../../styles/home.module.css';

export default function Home() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                
                <div className={styles.section}>
                    <h2 className={styles.listTitle}>Lista das salas</h2>
                    <div className={styles.listContainer}>
                        <div className={styles.roomCard}>
                            <span className={styles.roomName}>Sala 1</span>
                            <div className={styles.actions}>
                                <button className={styles.infoButton}>ℹ️</button>
                                <button className={styles.reserveButton}>Reservar</button>
                            </div>
                        </div>
                        <div className={styles.roomCard}>
                            <span className={styles.roomName}>Sala 2</span>
                            <div className={styles.actions}>
                                <button className={styles.infoButton}>ℹ️</button>
                                <button className={styles.reserveButton}>Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className={styles.section}>
                    <h2 className={styles.reservationTitle}>Minhas Reservas</h2>
                    <div className={styles.reservationContainer}>
                        <div className={styles.roomCard}>
                            <span className={styles.roomName}>Sala 3</span>
                            <div className={styles.actions}>
                                <button className={styles.infoButton}>ℹ️</button>
                                <button className={styles.cancelButton}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
