import { Endereco } from "src/camada_domain/endereco";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'salas' })
export class SalaEntity {

    constructor(
        id: number,
        nome: string,
        capacidade: number,
        localizacao: Endereco,
        usuarioAdministrador: UsuarioEntity,
        descricao: string
    ) {
        this.id = id;
        this.nome = nome;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
        this.usuarioAdministrador = usuarioAdministrador;
        this.descricao = descricao;
    }

    get _id(): number {
        return this.id;
    }

    get _nome(): string {
        return this.nome;
    }

    set _nome(value: string) {
        this.nome = value;
    }

    get _capacidade(): number {
        return this.capacidade;
    }

    set _capacidade(value: number) {
        this.capacidade = value;
    }

    get _localizacao(): Endereco {
        return this.localizacao;
    }

    set _localizacao(value: Endereco) {
        this.localizacao = value;
    }

    get _usuarioAdministrador(): UsuarioEntity {
        return this.usuarioAdministrador;
    }

    set _usuarioAdministrador(value: UsuarioEntity) {
        this.usuarioAdministrador = value;
    }

    get _descricao(): string {
        return this.descricao;
    }

    set _descricao(value: string) {
        this.descricao = value;
    }

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ name: 'nome', length: 100, nullable: false})
    nome: string;

    @Column({ name: 'capacidae', nullable: false})
    capacidade: number;

    @Column(() => Endereco)
    localizacao: Endereco

    @ManyToOne(() => UsuarioEntity)
    @Column({ name: 'usuario_administrador' })
    usuarioAdministrador:UsuarioEntity

    @Column({ name: 'descricao', length: 100, nullable: false})
    descricao: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
}