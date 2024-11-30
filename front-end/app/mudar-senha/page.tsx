'use client'

import React, { useState } from 'react';
import styles from '../../styles/mudar-senha.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function MudarSenha() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const redefinirSenha = () => {
    axios
      .patch(`http://localhost:3001/usuarios/alterar-senha/${email}`, { novaSenha: senha })
      .then(() => {
        console.log('Senha alterada com sucesso');
        router.push('/login');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Esqueci minha senha</h2>
        <p>Digite o seu E-mail e a sua nova senha</p>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail</label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>✉️</span>
            <input
              type="email"
              id="email"
              placeholder="Seu E-mail ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="senha">Senha</label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              id="senha"
              placeholder="Sua senha ..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
        </div>
        <p className={styles.instructions}>
          Ao apertar o botão de redefinição, a redifinição já ocorrerá
        </p>
        <button className={styles.resetButton} onClick={redefinirSenha}>
          Redefinir
        </button>
      </div>
    </div>
  );
}
