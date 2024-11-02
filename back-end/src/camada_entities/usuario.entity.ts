
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TipoUsuario } from 'src/camada_domain/tipoUsario';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {

    constructor(
        id: string,
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

    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column({ name: 'nome', length: 100, nullable: false })
    private nome: string;

    @Column({ name: 'email', length: 70, nullable: false })
    private email: string;

    @Column({ name: 'senha', length: 255, nullable: false })
    private senha: string;

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

    get getId(): string {
        return this.id;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(value: string) {
        this.nome = value;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(value: string) {
        this.email = value;
    }

    get getSenha(): string {
        return this.senha;
    }

    set setSenha(value: string) {
        this.senha = value;
    }

    get getTipoUsuario(): TipoUsuario {
        return this.tipoUsuario;
    }

    set setTipoUsuario(value: TipoUsuario) {
        this.tipoUsuario = value;
    }
}