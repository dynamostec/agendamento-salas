'use client'

import { useState } from 'react';
import styles from '../../styles/login.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const router = useRouter();

  const mudarSenha = () => {
    router.push('mudar-senha');
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '' || senha === '') {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    const dadosLogin = {
      email,
      senha
    };

    limparFormulario();

    await axios.post('http://localhost:3001/login', dadosLogin)
      .then(response => {
        axios.get(`http://localhost:3001/usuarios/email/${dadosLogin.email}`)
          .then(response => {
            if (response) {
              localStorage.setItem('id-usuario', response.data.id);
              
              if(response.data.tipoUsuario === 'admin') {
                localStorage.setItem('type-home', 'admin');
                router.push('/home-admin');
              } else {
                localStorage.setItem('type-home', 'user');
                router.push('/home-usuario');
              }
            }

          })
        console.log("Login bem-sucedido");
        limparFormulario();
      })


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
        {mensagemErro && <p className={styles.errorMessage}>{mensagemErro}</p>} {/* Mensagem de erro */}
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Seu E-mail ..."
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              placeholder="Sua Senha ..."
              value={senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className={styles.linkContainer}>
            <a href="#" className={styles.forgotPassword} onClick={mudarSenha}>Esqueci minha senha</a>
          </div>
          <button type="submit" className={styles.submitButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
