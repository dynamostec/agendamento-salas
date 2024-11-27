'use client'

import { useState } from 'react';
import styles from '../../styles/detalhes-sala.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function DetalhesSala() {

  const [id] = useState('');
  const [nome] = useState('');
  const [capacidade] = useState('');
  const [cep] = useState('');
  const [cidade] = useState('');
  const [estado] = useState('');
  const [rua] = useState('');
  const [descricao] = useState('');
  const router = useRouter();
  // exemplo de como pode ser puxado os dados:
  // { dados }: { dados: any }
  // colocar dentro do p individual de cada um: <p> {dados.nome} {dados.capacidade} {dados.cep} {dados.cidade} {dados.estado} {dados.endereco} {dados.descricao} </p>


  let dadosSala = {
    id,
    nome,
    capacidade,
    usuarioAdministrador: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      tipoUsuario: ''
    },
    localizacao: {
      cep,
      cidade,
      estado,
      rua,
    },
    descricao
  };

  axios.post('http://localhost:3001/detalhes-sala', dadosSala)
    .then(response => {
      console.log("Apresentação dos detalhes de sala.");
      router.push('/home');
    })
    catch(error => {
      console.error("Erro ao apresentar os detalhes da sala:", error);
    });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Detalhes da Sala</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoBasica}>
            <p><strong>Nome da sala:</strong> </p>
            <p><strong>Capacidade:</strong> </p>
            <p><strong>Administrador:</strong></p>
            <p><strong>CEP:</strong> </p>
            <p><strong>Cidade:</strong> </p>
            <p><strong>Estado:</strong> </p>
            <p><strong>Endereço:</strong> </p>
          </div>
          <div className={styles.descricao}>
            <strong>Descrição:</strong>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}