'use client'

import { useState } from 'react';  
import styles from '../../styles/detalhes-reserva.module.css';

export default function DetalhesReserva() {
    
    const [reserva, setReserva] = useState({
        nomeReservante: '',
        email: '',
        nomeSala: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: '',
        dataReserva: '',
        horarioReserva: '',
        descricao: ''
    });

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className={styles.headerTitle}>Detalhes da Reserva</h2>
                <div className={styles.field}>
                    <label>Nome do reservante:</label>
                    <p className={styles.value}>{reserva.nomeReservante}</p>
                </div>
                <div className={styles.field}>
                    <label>Email:</label>
                    <p className={styles.value}>{reserva.email}</p>
                </div>
                <div className={styles.field}>
                    <label>Nome da sala:</label>
                    <p className={styles.value}>{reserva.nomeSala}</p>
                </div>
                <div className={styles.field}>
                    <label>Endereço:</label>
                    <p className={styles.value}>{reserva.endereco}</p>
                </div>
                <div className={styles.field}>
                    <label>Cep:</label>
                    <p className={styles.value}>{reserva.cep}</p>
                </div>
                <div className={styles.field}>
                    <label>Cidade:</label>
                    <p className={styles.value}>{reserva.cidade}</p>
                </div>
                <div className={styles.field}>
                    <label>Estado:</label>
                    <p className={styles.value}>{reserva.estado}</p>
                </div>
                <div className={styles.field}>
                    <label>Data de reserva:</label>
                    <p className={styles.value}>{reserva.dataReserva}</p>
                </div>
                <div className={styles.field}>
                    <label>Horário de reserva:</label>
                    <p className={styles.value}>{reserva.horarioReserva}</p>
                </div>
                <div className={styles.field}>
                    <label>Descrição:</label>
                    <p className={`${styles.value} ${styles.descricao}`}>{reserva.descricao}</p>
                </div>
            </div>
        </div>
    );
}
