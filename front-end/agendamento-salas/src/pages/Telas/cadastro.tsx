import { useState } from 'react';
import styles from '../../styles/cadastro.module.css';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  // Função chamada ao enviar o formulário
  const handleEnviarCadastro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não são iguais.'); //caso n for igual, muda a msg de erro
      return; 
    }

    const dadosCadastro = {
      nome,
      email,
      senha,
      isAdmin
    };

    console.log(dadosCadastro);

    limparFormulario();
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
        {mensagemErro && <p className={styles.errorMessage}>{mensagemErro}</p>} {/* Mensagem de erro */}
        <form onSubmit={handleEnviarCadastro}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Seu Nome ..." 
              value={nome} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
              required 
            />
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
            <input 
              type="password" 
              placeholder="Confirme Sua Senha ..." 
              value={confirmarSenha} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)}
              required 
            />
          </div>
          <div className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              id="admin" 
              checked={isAdmin} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsAdmin(e.target.checked)} 
            />
            <label className={styles.admin} htmlFor="admin">Criar usuário como Administrador</label>
          </div>
          <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}