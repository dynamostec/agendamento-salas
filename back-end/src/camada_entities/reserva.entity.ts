import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalaEntity } from "./sala.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'reservas' })
export class ReservaEntity {

    constructor(
        id: string, 
        usuario: UsuarioEntity,
        sala: SalaEntity,
        dataHoraInicio: Date,
        dataHoraTermino: Date
    ) {
        this.id = id;
        this.usuario = usuario;
        this.sala = sala;
        this.dataHoraInicio = dataHoraInicio;
        this.dataHoraTermino = dataHoraTermino;
    }

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ManyToOne(() => UsuarioEntity)
    usuario:UsuarioEntity;
    
    @ManyToOne(() => SalaEntity)
    sala:SalaEntity;

    @Column({ name: 'data_hora_inicio', nullable: false })
    dataHoraInicio:Date;

    @Column({ name: 'data_hora_termino', nullable: false })
    dataHoraTermino:Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
}