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
    private id:string;

    @ManyToOne(() => UsuarioEntity)
    private usuario:UsuarioEntity;
    
    @ManyToOne(() => SalaEntity)
    private sala:SalaEntity;

    @Column({ name: 'data_hora_inicio', nullable: false })
    private dataHoraInicio:Date;

    @Column({ name: 'data_hora_termino', nullable: false })
    private dataHoraTermino:Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;

    get getId(): string {
        return this.id;
    }
    get getUsuario(): UsuarioEntity {
        return this.usuario;
    }
    set setUsuario(value: UsuarioEntity) {
        this.usuario = value;
    }
    get getSala(): SalaEntity {
        return this.sala;
    }
    set setSala(value: SalaEntity) {
        this.sala = value;
    }
    get getDataHoraInicio(): Date {
        return this.dataHoraInicio;
    }
    set setDataHoraInicio(value: Date) {
        this.dataHoraInicio = value;
    }
    get getDataHoraTermino(): Date {
        return this.dataHoraTermino;
    }
    set setDataHoraTermino(value: Date) {
        this.dataHoraTermino = value;
    }
}