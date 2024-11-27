'use client'

import { useEffect, useState } from 'react';  
import styles from '../../styles/detalhes-reserva.module.css';
import axios from 'axios';

export default function DetalhesReserva() {
    
    const [reserva, setReserva] = useState({
        id: '42873ff1-2a56-4a1b-acfe-eca048037085',
        usuario: {
            id: '',
            nome: '',
            email: '',
            senha: '',
            tipoUsuario: ''
        },
        sala: {
            id: '',
            nome: '',
            capacidade: '',
            usuarioAdministrador: {
                id: '',
                nome: '',
                email: '',
                senha: '',
                tipoUsuario: ''
            },
            localizacao: {
                rua: '',
                cep: '',
                cidade: '',
                estado: ''
            },
            descricao: ''
        },
        dataHoraInicio: '',
        dataHoraTermino: ''
    });

    useEffect(() => {
        const fetchReserva = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/reservas/${reserva.id}`); 
                setReserva(response.data); 
            } catch (error) {
                console.error('Erro ao carregar detalhes da reserva:', error);
            }
        };

        fetchReserva();
    }, []);

    const formatDate = (dateTime: string): string => {
        const datePart = dateTime.split('T')[0]; 
        const [year, month, day] = datePart.split('-');
        return `${day}/${month}/${year}`; 
    };
    
    const formatTime = (dateTime: string): string => {
        const timePart = dateTime.split('T')[1]?.split('Z')[0]; 
        const [hour, minute] = timePart.split(':'); 
        return `${hour}:${minute}`; 
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className={styles.headerTitle}>Detalhes da Reserva</h2>
                <div className={styles.field}>
                    <label>Nome do reservante:</label>
                    <p className={styles.value}>{reserva.usuario.nome}</p>
                </div>
                <div className={styles.field}>
                    <label>Email:</label>
                    <p className={styles.value}>{reserva.usuario.email}</p>
                </div>
                <div className={styles.field}>
                    <label>Nome da sala:</label>
                    <p className={styles.value}>{reserva.sala.nome}</p>
                </div>
                <div className={styles.field}>
                    <label>Endereço:</label>
                    <p className={styles.value}>{reserva.sala.localizacao.rua}</p>
                </div>
                <div className={styles.field}>
                    <label>Cep:</label>
                    <p className={styles.value}>{reserva.sala.localizacao.cep}</p>
                </div>
                <div className={styles.field}>
                    <label>Cidade:</label>
                    <p className={styles.value}>{reserva.sala.localizacao.cidade}</p>
                </div>
                <div className={styles.field}>
                    <label>Estado:</label>
                    <p className={styles.value}>{reserva.sala.localizacao.estado}</p>
                </div>
                <div className={styles.field}>
                    <label>Data de início da reserva:</label>
                    <p className={styles.value}>{formatDate(reserva.dataHoraInicio)}</p>
                </div>
                <div className={styles.field}>
                    <label>Horário de início da reserva:</label>
                    <p className={styles.value}>{formatTime(reserva.dataHoraInicio)}</p>
                </div>
                <div className={styles.field}>
                    <label>Data final da reserva:</label>
                    <p className={styles.value}>{formatDate(reserva.dataHoraTermino)}</p>
                </div>
                <div className={styles.field}>
                    <label>Horário final da reserva:</label>
                    <p className={styles.value}>{formatTime(reserva.dataHoraTermino)}</p>
                </div>
                <div className={styles.field}>
                    <label>Descrição:</label>
                    <p className={`${styles.value} ${styles.descricao}`}>{reserva.sala.descricao}</p>
                </div>
            </div>
        </div>
    );
}
