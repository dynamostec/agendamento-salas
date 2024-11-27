"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../styles/cadastro.module.css';

export default function Cadastro() {
  const router = useRouter();
  const id = "";
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  // Função chamada ao enviar o formulário
  const handleEnviarCadastro = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não são iguais.');
      return;
    }

    isAdmin ? 'admin' : 'user';

    const dadosCadastro = {
      nome,
      email,
      senha,
      tipoUsuario: '',
    };

    try {

      if(isAdmin) {
        dadosCadastro.tipoUsuario = 'admin'
      } 

      const response = await axios.post('http://localhost:3001/usuarios', dadosCadastro);

      if (response.status === 201) {
        console.log('Cadastro realizado com sucesso:', response.data);
        limparFormulario();
        router.push('/login');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor:', error);
      setMensagemErro('Erro ao enviar dados. Tente novamente.');
    }
  };

  // Função para limpar os campos do formulário
  const limparFormulario = () => {
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setIsAdmin(false);
    setMensagemErro('');
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.headerTitle}>Cadastro</h2>
        <p className={styles.headerDescription}>Digite os seus dados para realizar seu cadastro</p>
        {mensagemErro && <p className={styles.errorMessage}>{mensagemErro}</p>}
        <form onSubmit={handleEnviarCadastro}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Seu Nome ..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
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
            <input
              type="password"
              placeholder="Confirme Sua Senha ..."
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="admin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label className={styles.admin} htmlFor="admin">Criar usuário como Administrador</label>
          </div>
          <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
