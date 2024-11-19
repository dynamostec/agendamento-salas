import { useState } from 'react';
import styles from '../../styles/cadastroSalas.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CadastroSalas() {
    const [salas, setSalas] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const handleCadastroSalas = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (salas === '' || capacidade === '' || cep === '' || cidade === '' || estado === '' || endereco === '' || descricao === '') {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        const dadosCadastrosSalas = {
            salas,
            capacidade,
            cep,
            cidade,
            estado,
            endereco,
            descricao
        };

        const router = useRouter();

        axios.post('http://localhost:3001/salas', dadosCadastrosSalas)
            .then(response => {
                console.log('Cadastro de sala bem sucedido');
                router.push('/home');
            })

        console.log(dadosCadastrosSalas);

        limparFormulario();
    };

    const limparFormulario = () => {
        setSalas('');
        setCapacidade('');
        setCep('');
        setEstado('');
        setCidade('');
        setEndereco('');
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
                            value={salas}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSalas(e.target.value)}
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
                            placeholder="Endereço"
                            value={endereco}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value)}
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

