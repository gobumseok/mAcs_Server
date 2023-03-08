import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcsPositiontag } from "./AcsPositiontag";

@Entity("acs_positiontagtype", { schema: "acs_amr" })
export class AcsPositiontagtype {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "code" })
  code: number;

  @Column("varchar", { name: "type", length: 30 })
  type: string;

  @Column("varchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => AcsPositiontag, (acsPositiontag) => acsPositiontag.type)
  acsPositiontags: AcsPositiontag[];
}
