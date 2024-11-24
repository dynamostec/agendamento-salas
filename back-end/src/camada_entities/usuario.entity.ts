
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TipoUsuario } from 'src/camada_domain/tipoUsario';
import { ReservaEntity } from './reserva.entity';
import { SalaEntity } from './sala.entity';

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
    id: string;

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

    @OneToMany(() => ReservaEntity, reservaEntity => reservaEntity.usuario)
    reserva: ReservaEntity;

    @OneToMany(() => SalaEntity, salaEntity => salaEntity.usuarioAdministrador)
    sala: SalaEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
}