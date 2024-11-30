'use client'

import { useEffect, useState } from 'react';
import styles from '../../styles/detalhes-sala.module.css';
import axios from 'axios';

export default function DetalhesSala() {
  const [sala, setSala] = useState({
    id: '',
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
      cep: '',
      cidade: '',
      estado: '',
      rua: '',
    },
    descricao: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); // Ativa o modo de edição
  };

  const handleCancel = () => {
    setIsEditing(false); // Sai do modo de edição sem salvar
  };

  const handleSave = () => {
    axios.put(`http://localhost:3001/salas/${sala.id}`, sala);
    setIsEditing(false); 
  };

  useEffect(() => {
    const idSala = localStorage.getItem('id-sala');

    if (idSala) {
      axios.get(`http://localhost:3001/salas/${idSala}`)
        .then(response => {
          setSala(response.data);
        });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const value = e.target.value;

    if (field.includes('.')) {
      // Para campos aninhados (ex: "localizacao.cidade")
      const [parent, child] = field.split('.');
      setSala(prevState => ({
        ...prevState,
        [parent]: {
          ...(prevState as any)[parent],
          [child]: value,
        },
      }));      
    } else {
      // Para campos simples
      setSala(prevState => ({ ...prevState, [field]: value }));
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Detalhes da Sala</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoBasica}>
            <p><strong>Nome da sala:</strong></p>
            <input
              type="text"
              value={sala.nome}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'nome')}
              className={styles.input}
            />

            <p><strong>Capacidade:</strong></p>
            <input
              type="text"
              value={sala.capacidade}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'capacidade')}
              className={styles.input}
            />

            <p><strong>Administrador:</strong></p>
            <input
              type="text"
              value={sala.usuarioAdministrador.nome}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'usuarioAdministrador.nome')}
              className={styles.input}
            />

            <p><strong>CEP:</strong></p>
            <input
              type="text"
              value={sala.localizacao.cep}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'localizacao.cep')}
              className={styles.input}
            />

            <p><strong>Cidade:</strong></p>
            <input
              type="text"
              value={sala.localizacao.cidade}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'localizacao.cidade')}
              className={styles.input}
            />

            <p><strong>Estado:</strong></p>
            <input
              type="text"
              value={sala.localizacao.estado}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'localizacao.estado')}
              className={styles.input}
            />

            <p><strong>Endereço:</strong></p>
            <input
              type="text"
              value={sala.localizacao.rua}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'localizacao.rua')}
              className={styles.input}
            />
          </div>

          <div className={styles.descricao}>
            <strong>Descrição:</strong>
            <br />
            <textarea
              value={sala.descricao}
              disabled={!isEditing}
              onChange={(e) => handleChange(e, 'descricao')}
              className={styles.textarea}
            ></textarea>
          </div>
        </div>
      </div>

      <div className={styles.botoes}>
        {isEditing ? (
          <>
            <button onClick={handleCancel} className={styles.botaoEdits}>
              CANCELAR
            </button>
            <button onClick={handleSave} className={styles.botaoEdits}>
              SALVAR
            </button>
          </>
        ) : (
          <button onClick={handleEdit} className={styles.botaoEdits}>
            EDITAR
          </button>
        )}
      </div>
    </div>
  );
}