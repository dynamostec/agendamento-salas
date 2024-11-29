'use client'

import React from 'react';
import styles from '../../styles/reserva-salas.module.css';

const ReservaSalas: React.FC = () => {
  return (
    <div className={styles.wrapper}> {/* Wrapper para centralizar */}
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.titleH2}>Detalhes da Sala</h2>
          <div className={styles.field}>
            <label>Nome da sala:</label>
            <input type="text" placeholder="Nome da sala" />
          </div>
          <div className={styles.field}>
            <label>Capacidade:</label>
            <input type="text" placeholder="Capacidade" />
          </div>
          <div className={styles.field}>
            <label>CEP:</label>
            <input type="text" placeholder="CEP" />
          </div>
          <div className={styles.field}>
            <label>Cidade:</label>
            <input type="text" placeholder="Cidade" />
          </div>
          <div className={styles.field}>
            <label>Estado:</label>
            <input type="text" placeholder="Estado" />
          </div>
          <div className={styles.field}>
            <label>Endereço:</label>
            <input type="text" placeholder="Endereço" />
          </div>
          <div className={styles.field}>
            <label>Descrição:</label>
            <textarea placeholder="Descrição"></textarea>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.titleH2}>Detalhes do Reservante</h2>
          <div className={styles.field}>
            <label>Nome:</label>
            <input type="text" placeholder="Nome" />
          </div>
          <div className={styles.field}>
            <label>E-mail:</label>
            <input type="email" placeholder="E-mail" />
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.titleH2}>Agendamento</h2>
          <div className={styles.field}>
            <label>Data:</label>
            <input type="date" />
          </div>
          <div className={styles.field}>
            <label>Hora Início:</label>
            <input type="time" />
          </div>
          <div className={styles.field}>
            <label>Hora Fim:</label>
            <input type="time" />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>RESERVAR</button>
          <p>Clique no botão para confirmar a reserva.</p>
        </div>
      </div>
    </div>
  );
};

export default ReservaSalas;
