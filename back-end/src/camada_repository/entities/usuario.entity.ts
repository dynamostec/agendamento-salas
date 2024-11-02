
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TipoUsuario } from 'src/camada_domain/tipoUsario';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        tipoUsuario: TipoUsuario
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
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

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _senha(): string {
        return this.senha;
    }

    set _senha(value: string) {
        this.senha = value;
    }

    get _tipoUsuario(): TipoUsuario {
        return this.tipoUsuario;
    }

    set _tipoUsuario(value: TipoUsuario) {
        this.tipoUsuario = value;
    }

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'email', length: 70, nullable: false })
    email: string;

    @Column({ name: 'senha', length: 255, nullable: false })
    senha: string;

    @Column({ 
        name: 'tipo_usuario',
        type: 'enum',
        enum: TipoUsuario,
        default: TipoUsuario.USER
    })
    tipoUsuario: TipoUsuario;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
}