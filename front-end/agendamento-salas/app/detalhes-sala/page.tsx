'use client'

import { useState } from 'react';
import styles from '../../styles/detalhes-sala.module.css';

export default function DetalhesSala() {
  //exemplo de como pode ser puxado os dados:
  // { dados }: { dados: any }
  // colocar dentro do p individual de cada um: <p> {dados.nome} {dados.capacidade} {dados.cep} {dados.cidade} {dados.estado} {dados.endereco} {dados.descricao} </p>
  
    return(
      <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Detalhes da Sala</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoBasica}>
            <p><strong>Nome da sala:</strong> </p>
            <p><strong>Capacidade:</strong> </p>
            <p><strong>CEP:</strong> </p>
            <p><strong>Cidade:</strong> </p>
            <p><strong>Estado:</strong> </p>
            <p><strong>Endereço:</strong> </p>
          </div>
          <div className={styles.descricao}>
            <strong>Descrição:</strong>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    )
}