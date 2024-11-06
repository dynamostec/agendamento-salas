'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const handleCadastroRedirect = () => {
    router.push('/cadastro');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Clique no botão abaixo para ir para outra página.</p>
      <button onClick={handleLoginRedirect}>
        login
      </button>

        <></>
      <button onClick={handleCadastroRedirect}>
        Cadastro
      </button>
    </div>
  );
};

export default HomePage;
