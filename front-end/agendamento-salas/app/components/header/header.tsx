'use client'

import styles from './header.module.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../image/dynamos.jpg';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Header() {
    const router = useRouter();

    

    const [mostrarBotao, setMostrarBotao] = useState(false);

    useEffect(() => {
        const idUsuario = localStorage.getItem('id-usuario');

        if (idUsuario) {
            axios.get(`http://localhost:3001/usuarios/${idUsuario}`)
                .then(response => {
                    if (response.data.tipoUsuario === 'admin') {
                        setMostrarBotao(true); 
                    } else {
                        setMostrarBotao(false); 
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar tipo de usuário:', error);
                });
            console.log(mostrarBotao);
        }
    }, []);

    const cadastrarSala = () => {
        router.push('cadastro-sala');
    };

    return (
        <div className={styles.all}>
            <Image src={Logo} alt="Logo" className={styles.logo} />

            <div className={styles.continerButtons}>
                {mostrarBotao && ( 
                    <button
                        className={styles.reserveButton}
                        onClick={() => cadastrarSala()}
                    >
                        Cadastrar sala
                    </button>
                )}
            </div>
        </div>
    );
}
