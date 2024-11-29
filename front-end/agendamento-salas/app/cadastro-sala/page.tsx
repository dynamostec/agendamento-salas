'use client'

import { useState } from 'react';
import styles from '../../styles/cadastroSalas.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CadastroSalas() {
    const [nome, setNome] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    const handleCadastroSalas = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nome === '' || capacidade === '' || cep === '' || cidade === '' || estado === '' || rua === '' || descricao === '') {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        let dadosCadastrosSalas = {
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

        const idUsuario = localStorage.getItem('id-usuario');

        if(idUsuario) {
            dadosCadastrosSalas.usuarioAdministrador.id = idUsuario;

            axios.post('http://localhost:3001/salas', dadosCadastrosSalas)
            .then(response => {
                console.log('Cadastro de sala bem sucedido');

                const typeHome = localStorage.getItem('type-home');

                if(typeHome) {
                    if(typeHome === 'admin') {
                        router.push('/home-admin');
                    } else {
                        router.push('/home-user');
                    }
                }

            })

            limparFormulario();
        } else {
            console.log('Id usuario nulo')
        }
    };

    const limparFormulario = () => {
        setNome('');
        setCapacidade('');
        setCep('');
        setEstado('');
        setCidade('');
        setRua('');
        setDescricao('');
        setMensagemErro('');
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className={styles.headerTitle}>Cadastrar Salas</h2>
                <p className={styles.headerSubtitle}>Digite os dados para cadastrar uma nova sala.</p>
                {mensagemErro && <p className={styles.errorMessage}>{mensagemErro}</p>} {/* Mensagem de erro */}
                <form onSubmit={handleCadastroSalas}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Nome da Sala"
                            value={nome}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCep(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEstado(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Capacidade"
                            value={capacidade}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCapacidade(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCidade(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRua(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescricao(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Criar Sala</button>
                </form>
            </div>
        </div>
    );
}

