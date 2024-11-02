import { Endereco } from "src/camada_domain/endereco";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { EnderecoEntity } from "./endereco.entity";

@Entity({ name: 'salas' })
export class SalaEntity {

    constructor(
        id: string,
        nome: string,
        capacidade: number,
        localizacao: EnderecoEntity,
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
    private id: string;

    @Column({ name: 'nome', length: 100, nullable: false})
    private nome: string;

    @Column({ name: 'capacidae', nullable: false})
    private capacidade: number;

    @Column(() => EnderecoEntity)
    private localizacao: EnderecoEntity

    @ManyToOne(() => UsuarioEntity)
    private usuarioAdministrador:UsuarioEntity

    @Column({ name: 'descricao', length: 100, nullable: false})
    private descricao: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
    
    get getId(): string {
        return this.id;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(value: string) {
        this.nome = value;
    }

    get getCapacidade(): number {
        return this.capacidade;
    }

    set setCapacidade(value: number) {
        this.capacidade = value;
    }

    get getLocalizacao(): EnderecoEntity {
        return this.localizacao;
    }

    set setLocalizacao(value: EnderecoEntity) {
        this.localizacao = value;
    }

    get getUsuarioAdministrador(): UsuarioEntity {
        return this.usuarioAdministrador;
    }

    set setUsuarioAdministrador(value: UsuarioEntity) {
        this.usuarioAdministrador = value;
    }

    get getDescricao(): string {
        return this.descricao;
    }

    set setDescricao(value: string) {
        this.descricao = value;
    }
}