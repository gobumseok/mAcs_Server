import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AmrEntity } from './Amr.entity';
import { CallorderEntity } from './Callorder.entity';

@Entity("amrtype",{schema:'acs'})
export class AmrtypeEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "code", length: 5 })
  code: string;

  @Column("varchar", { name: "type_id",unique:true,length: 30 })
  type_id: string;

  @Column("varchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => AmrEntity, (Amr) => Amr.type)
  Amrs: AmrEntity[];

  @OneToMany(() => CallorderEntity, (acsCallorder) => acsCallorder.amrType)
  Callorders: CallorderEntity[];
}
