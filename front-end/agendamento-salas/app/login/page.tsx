'use client'


import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../styles/login.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (email === '' || senha === '') {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    const dadosLogin = {
      email,
      senha,
    };

    try {
      const response = await axios.post('http://localhost:3001/usuarios/login', dadosLogin); //*AJUSTAR*

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
        limparFormulario();
        router.push('/home');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMensagemErro('Credenciais inválidas. Tente novamente.');
    }
  };

  const limparFormulario = () => {
    setEmail('');
    setSenha('');
    setMensagemErro('');
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.headerTitle}>Login</h2>
        <p className={styles.headerDescription}>Digite os seus dados para realizar o login</p>
        {mensagemErro && <p className={styles.errorMessage}>{mensagemErro}</p>}
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Seu E-mail ..." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="password" 
              placeholder="Sua Senha ..." 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required
            />
          </div>
          <div className={styles.linkContainer}>
            <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
          </div>
          <button type="submit" className={styles.submitButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
