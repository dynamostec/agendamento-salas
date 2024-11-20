import { useState } from 'react';
import styles from '../../styles/tela-detalhada.module.css';

export default function DetalhesSala() {
  // Resgatar os dados passados de CadastrarSala
  const location = useLocation();
  const dadosSala = location.state;

  if (!dadosSala) {
    return <div>Erro: Nenhum dado encontrado.</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Detalhes da Sala</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.detail}>
            <strong>Nome da Sala:</strong> {dadosSala.nomeSala}
          </div>
          <div className={styles.detail}>
            <strong>Capacidade:</strong> {dadosSala.capacidade}
          </div>
          <div className={styles.detail}>
            <strong>CEP:</strong> {dadosSala.cep}
          </div>
          <div className={styles.detail}>
            <strong>Cidade:</strong> {dadosSala.cidade}
          </div>
          <div className={styles.detail}>
            <strong>Estado:</strong> {dadosSala.estado}
          </div>
          <div className={styles.detail}>
            <strong>Endereço:</strong> {dadosSala.endereco}
          </div>
          <div className={styles.detail}>
            <strong>Descrição:</strong> {dadosSala.descricao}
          </div>
        </div>
      </div>
    </div>
  );
}
