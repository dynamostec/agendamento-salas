'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/home.module.css';

export default function HomePage() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const handleCadastroRedirect = () => {
    router.push('/cadastro');
  };

  return (
  <>
    <div className={styles.container}>
      <div className={styles.card}>
          <h2>Gerenciamento de salas</h2>
          <p>
            Bem-vindo ao <b>Sistema de Reservas de Salas!</b> Nossa plataforma é projetada para tornar a organização de reuniões simples e eficiente, oferecendo uma experiência intuitiva e prática para todos os colaboradores.
          </p>
          <p>
             Com o sistema, você pode facilmente verificar a disponibilidade das salas, fazer reservas específicas para suas necessidades, e receber notificações sobre suas reuniões. Seja para uma reunião rápida ou um evento importante, o sistema permite gerenciar suas reservas de maneira segura e personalizada, garantindo que você tenha o espaço ideal no momento certo.
          </p>
          <div className={styles.buttons}>
            <button className={styles.enter} onClick={handleLoginRedirect}>Entrar</button>
            <button className={styles.register} onClick={handleCadastroRedirect}>Cadastre-se</button>
          </div>
      </div>
    </div>
  </>

  );
};