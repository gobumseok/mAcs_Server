import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcsAmr } from "./AcsAmr";
import { AcsCallorder } from "./AcsCallorder";

@Entity("acs_amrtype", { schema: "acs_amr" })
export class AcsAmrtype {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "code", length: 5 })
  code: string;

  @Column("varchar", { name: "type", length: 30 })
  type: string;

  @Column("varchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => AcsAmr, (acsAmr) => acsAmr.type)
  acsAmrs: AcsAmr[];

  @OneToMany(() => AcsCallorder, (acsCallorder) => acsCallorder.amrType)
  acsCallorders: AcsCallorder[];
}
