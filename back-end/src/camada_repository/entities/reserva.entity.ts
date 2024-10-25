import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalaEntity } from "./sala.entity";
import { UsuarioEntity } from "./usuario.entity";
import { Delete } from "@nestjs/common";

@Entity({ name: 'reservas' })
export class ReservaEntity {

    @PrimaryGeneratedColumn('identity')
    id:number;

    @Column({ name: '' })
    usuario:UsuarioEntity;
    sala:SalaEntity;
    dataHoraInicio:Date;
    dataHoraTermino:Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string;
}