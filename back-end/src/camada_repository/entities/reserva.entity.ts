import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalaEntity } from "./sala.entity";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'reservas' })
export class ReservaEntity {

    constructor(
        id: number, 
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

    get _id(): number {
        return this.id;
    }

    get _usuario(): UsuarioEntity {
        return this.usuario;
    }

    set _usuario(value: UsuarioEntity) {
        this.usuario = value;
    }

    get _sala(): SalaEntity {
        return this.sala;
    }

    set _sala(value: SalaEntity) {
        this.sala = value;
    }

    get _dataHoraInicio(): Date {
        return this.dataHoraInicio;
    }

    set _dataHoraInicio(value: Date) {
        this.dataHoraInicio = value;
    }

    get _dataHoraTermino(): Date {
        return this.dataHoraTermino;
    }

    set _dataHoraTermino(value: Date) {
        this.dataHoraTermino = value;
    }

    @PrimaryGeneratedColumn('identity')
    id:number;

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