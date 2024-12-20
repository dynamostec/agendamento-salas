'use client'

import { useEffect, useState } from 'react';
import styles from '../../styles/detalhes-sala.module.css';
import axios from 'axios';

export default function DetalhesSala() {
  const [sala, setSala] = useState({
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
      cep: '',
      cidade: '',
      estado: '',
      rua: '',
    },
    descricao: ''
  });

  useEffect(() => {
    const idSala = localStorage.getItem('id-sala');

    if (idSala) {
      axios.get(`http://localhost:3001/salas/${idSala}`)
        .then(response => {
          setSala(response.data);
        });
    }
  }, []);


  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Detalhes da Sala</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoBasica}>
            <p><strong>Nome da sala:</strong>{sala.nome}</p>
            <p><strong>Capacidade:</strong>{sala.capacidade}</p>
            <p><strong>Administrador:</strong>{sala.usuarioAdministrador.nome}</p>
            <p><strong>CEP:</strong>{sala.localizacao.cep}</p>
            <p><strong>Cidade:</strong>{sala.localizacao.cidade}</p>
            <p><strong>Estado:</strong>{sala.localizacao.estado}</p>
            <p><strong>Endereço:</strong>{sala.localizacao.rua}</p>
          </div>
          <div className={styles.descricao}>
            <strong>Descrição:</strong>
            <p>{sala.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  )
}