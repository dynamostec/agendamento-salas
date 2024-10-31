import { Endereco } from "src/camada_domain/endereco";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'salas' })
export class SalaEntity {

    constructor(
        id: string,
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

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', length: 100, nullable: false})
    nome: string;

    @Column({ name: 'capacidae', nullable: false})
    capacidade: number;

    @Column(() => Endereco)
    localizacao: Endereco

    @ManyToOne(() => UsuarioEntity)
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