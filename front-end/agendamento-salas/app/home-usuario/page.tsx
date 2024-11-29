'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../styles/home.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Sala {
    id: string;
    nome: string;
}

interface Reserva {
    id: string;
    sala: Sala;
}

export default function Home() {
    const [salas, setSalas] = useState<Sala[]>([]);
    const [reservas, setReservas] = useState<Reserva[]>([]);
    const router = useRouter();

    useEffect(() => {
        const idUsuario = localStorage.getItem('id-usuario');

        if (idUsuario) {
            const fetchData = async () => {
                try {
                    await axios.get('http://localhost:3001/salas')
                        .then(response => {
                            setSalas(response.data);
                        });
                    await axios.get(`http://localhost:3001/reservas/usuario/${idUsuario}`)
                        .then(response => {
                            setReservas(response.data);
                        });
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                }
            };

            fetchData();
        }
    }, []);

    const navigateToDetails = (id: string, type: 'sala' | 'reserva') => {
        if (type === 'sala') {
            localStorage.setItem('id-sala', id);
            router.push('/detalhes-sala');
        } else {
            localStorage.setItem('id-reserva', id);
            router.push('/detalhes-reserva');
        }
    };

    const cancelarReserva = (id: string) => {
        const confirmacao = window.confirm('Deseja realmente cancelar a reserva?');
        if (confirmacao) {
            axios.delete(`http://localhost:3001/reservas/${id}`);
            window.location.reload();
        } else {
            console.log('Cancelamento abortado.');
        }

    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {/* Lista de Salas */}
                <div className={styles.section}>
                    <h2 className={styles.listTitle}>Lista das salas</h2>
                    <div className={styles.listContainer}>
                        {salas.map((sala) => (
                            <div key={sala.id} className={styles.roomCard}>
                                <span className={styles.roomName}>{sala.nome}</span>
                                <div className={styles.actions}>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => navigateToDetails(sala.id, 'sala')}
                                    >
                                        <div className={styles.elipse}><p>i</p></div>
                                    </button>
                                    <button className={styles.reserveButton}>Reservar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Minhas Reservas */}
                <div className={styles.section}>
                    <h2 className={styles.reservationTitle}>Minhas Reservas</h2>
                    <div className={styles.reservationContainer}>
                        {reservas.map((reserva) => (
                            <div key={reserva.id} className={styles.roomCard}>
                                <span className={styles.roomName}>{reserva.sala.nome}</span>
                                <div className={styles.actions}>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => navigateToDetails(reserva.id, 'reserva')}
                                    >
                                        <div className={styles.elipse}><p>i</p></div>
                                    </button>
                                    <button onClick={() => cancelarReserva(reserva.id)} className={styles.cancelButton}>Cancelar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
