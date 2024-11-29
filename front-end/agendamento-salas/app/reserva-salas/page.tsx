'use client'

import React, { useEffect, useState } from 'react';
import styles from '../../styles/reserva-salas.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ReservaSalas() {
  const [nomeSala, setNomeSala] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [id_usuario, setIdUsuario] = useState('');
  const [id_sala, setIdSala] = useState('');
  const [data, setData] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaTermino, setHoraTermino] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const router = useRouter();


  useEffect(() => {
    const idUsuario = localStorage.getItem('id-usuario');
    const idSala = localStorage.getItem('id-sala');

    console.log(idUsuario);
    console.log('Id sala: ' + idSala);

    if (idUsuario) {
      setIdUsuario(idUsuario);
      axios.get(`http://localhost:3001/usuarios/${idUsuario}`)
        .then(response => {
          setNomeUsuario(response.data.nome);
          setEmailUsuario(response.data.email);
          setTipoUsuario(response.data.tipoUsuario);
        });
    }

    if (idSala) {
      setIdSala(idSala);
      axios.get(`http://localhost:3001/salas/${idSala}`)
        .then(response => {
          setNomeSala(response.data.nome);
          setCapacidade(response.data.capacidade);
          setCep(response.data.localizacao.cep);
          setCidade(response.data.localizacao.cidade);
          setEstado(response.data.localizacao.estado);
          setEndereco(response.data.localizacao.rua);
          setDescricao(response.data.descricao);
        });
    }
  }, []);

  const handleEnviarReserva = async (e: React.FormEvent) => {
    e.preventDefault(); 

    
    if (!id_usuario || !id_sala || !data || !horaInicio || !horaTermino) {
      console.error('Dados insuficientes para criar a reserva.');
      return;
    }

    console.log('Id sala 2 : ' + id_sala);

    const newReserva = {
      usuario: {
        id: id_usuario,
        nome: '',
        email: '',
        senha: '',
        tipoUsuario: ''
      },
      sala: {
        id: id_sala,
        nome: '',
        capacidade: '',
        usuarioAdministrador: {
          id: '',
          nome: '',
          email: '',
          senha: '',
          tipoUsuario: ''
        },
        localizacao: {
          rua: '',
          cep: '',
          cidade: '',
          estado: ''
        },
        descricao: ''
      },
      dataHoraInicio: `${data}T${horaInicio}:00`,
      dataHoraTermino: `${data}T${horaTermino}:00`,
    };

    console.log(newReserva.dataHoraInicio);
    console.log(newReserva.dataHoraTermino);

    console.log(JSON.stringify(newReserva, null, 2));

    await axios.post('http://localhost:3001/reservas', newReserva)
      .then((response) => {
        const home = localStorage.getItem('type-home');
        if (home === 'admin') {
          router.push('/home-admin');
        } else {
          router.push('/home-usuario');
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar reserva:', error);
      });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleEnviarReserva}>
      <div className={styles.container}>
        {/*Section 1*/}
        <div className={styles.section}>
          <h2 className={styles.titleH2}>Detalhes da Sala</h2>
          <div className={styles.field}>
            <label>Nome da sala:</label>
            <input
              type="text"
              placeholder="Nome da sala"
              value={nomeSala}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>Capacidade:</label>
            <input
              type="text"
              placeholder="Capacidade"
              value={capacidade}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>CEP:</label>
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>Cidade:</label>
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>Estado:</label>
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>Endereço:</label>
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              disabled
            />
          </div>
          <div className={styles.field}>
            <label>Descrição:</label>
            <textarea
              placeholder="Descrição"
              value={descricao}
              disabled
            ></textarea>
          </div>

        </div>

        {/*Section 2*/}
        <div className={styles.section2}>
          <div className={styles.section}>
            <h2 className={styles.titleH2}>Detalhes do Reservante</h2>
            <div className={styles.field}>
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Nome"
                value={nomeUsuario}
                disabled
              />
            </div>
            <div className={styles.field}>
              <label>E-mail:</label>
              <input
                type="email"
                placeholder="E-mail"
                value={emailUsuario}
                disabled
              />
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.titleH2}>Agendamento</h2>
            <div className={styles.field}>
              <label>Data:</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Hora Início:</label>
              <input
                type="time"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Hora Fim:</label>
              <input
                type="time"
                value={horaTermino}
                onChange={(e) => setHoraTermino(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>RESERVAR</button>
        <p>Clique no botão para confirmar a reserva.</p>
      </div>
    </form>
  );
};
