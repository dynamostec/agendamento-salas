import { Endereco } from "src/camada_domain/endereco";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'salas' })
export class SalaEntity {

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