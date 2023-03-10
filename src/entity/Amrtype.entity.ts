import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AmrEntity } from './Amr.entity';
import { CallorderEntity } from './Callorder.entity';

@Entity("amrtype",{schema:'acs'})
export class AmrtypeEntity {
  @PrimaryGeneratedColumn('increment',{ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "code", length: 5 })
  code: string;

  @Column("varchar", { name: "type", length: 30 })
  type: string;

  @Column("varchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => AmrEntity, (acsAmr) => acsAmr.type)
  acsAmrs: AmrEntity[];

  @OneToMany(() => CallorderEntity, (acsCallorder) => acsCallorder.amrType)
  Callorders: CallorderEntity[];
}
