import styles from '../../styles/cadastro.module.css';

export default function Cadastro() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.headerTitle}>Cadastro</h2>
        <p className={styles.headerDescription}>Digite os seus dados para realizar seu cadastro</p>
        <form>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Seu Nome ..." />
            <input type="email" placeholder="Seu E-mail ..." />
          </div>
          <div className={styles.formGroup}>
            <input type="password" placeholder="Sua Senha ..." />
            <input type="password" placeholder="Confirme Sua Senha ..." />
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="admin" />
            <label className={styles.admin} htmlFor="admin">Criar usuário como Administrador</label>
          </div>
          <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}