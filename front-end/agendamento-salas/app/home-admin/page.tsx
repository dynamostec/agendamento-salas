'use client';
import Image from 'next/image';
import Logo from '../image/dynamos.jpg';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/home-admin.module.css';
import axios, { AxiosError } from 'axios';
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
                    await axios.get(`http://localhost:3001/salas/administrador/${idUsuario}`)
                        .then(response => {
                            setSalas(response.data);
                        });
                    await axios.get(`http://localhost:3001/reservas/administrador/${idUsuario}`)
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
            router.push('/detalhes-sala-admin');
        } else {
            localStorage.setItem('id-reserva', id);
            router.push('/detalhes-reserva');
        }
    };

    const cadastrarSala = () => {
        router.push('cadastro-sala');
    };

    const deletarSala = async (idSala: string) => {

        axios.get(`http://localhost:3001/reservas/sala/${idSala}`)
            .then(async response => {
                if(Array.isArray(response.data) && response.data.length > 0) {
                        alert('Você não pode deletar uma sala que está reservada');
                } else {
                    axios.delete(`http://localhost:3001/salas/${idSala}`)
                        .then(() => {
                            window.location.reload();
                        });
                }
            });
        
    };

    return (
        <>
            <div className={styles.all}>
                <Image src={Logo} alt="Logo" className={styles.logo} />
                <button
                    className={styles.reserveButton}
                    onClick={cadastrarSala}
                >
                    Cadastrar sala
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.container}>
                    {/* Lista de Salas */}
                    <div className={styles.section}>
                        <h2 className={styles.listTitle}>Minhas salas</h2>
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
                                        <button onClick={() => deletarSala(sala.id)} className={styles.reserveButton}>Deletar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Minhas Reservas */}
                    <div className={styles.section}>
                        <h2 className={styles.reservationTitle}>Reservas com minhas salas</h2>
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
                                        <button className={styles.cancelButton}>Cancelar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
