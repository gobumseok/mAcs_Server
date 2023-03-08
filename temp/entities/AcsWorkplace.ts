import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcsMap } from "./AcsMap";

@Entity("acs_workplace", { schema: "acs_amr" })
export class AcsWorkplace {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("varchar", { name: "version", nullable: true, length: 50 })
  version: string | null;

  @OneToMany(() => AcsMap, (acsMap) => acsMap.workPlace)
  acsMaps: AcsMap[];
}
