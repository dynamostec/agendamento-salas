import React from 'react';
import styles from '../../styles/mudar-senha.module.css';

export default function MudarSenha() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Esqueci minha senha</h2>
        <p>Digite o seu E-mail para a redefinição de senha</p>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail</label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>✉️</span>
            <input
              type="email"
              id="email"
              placeholder="Seu E-mail ..."
              required
            />
          </div>
        </div>
        <p className={styles.instructions}>
          Ao apertar o botão de redefinição, será enviado um e-mail onde será possível redefinir a senha
        </p>
        <button className={styles.resetButton}>Redefinir</button>
      </div>
    </div>
  );
}
