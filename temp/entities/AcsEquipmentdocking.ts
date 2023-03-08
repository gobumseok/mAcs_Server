import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsPositiontag } from "./AcsPositiontag";

@Index(
  "acs_equipmentdocking_position_tag_id_d995c859_fk_acs_posit",
  ["positionTagId"],
  {}
)
@Entity("acs_equipmentdocking", { schema: "acs_amr" })
export class AcsEquipmentdocking {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("tinyint", { name: "is_use_docking", width: 1 })
  isUseDocking: boolean;

  @Column("int", { name: "offset_lr_mark" })
  offsetLrMark: number;

  @Column("int", { name: "offset_lr_move" })
  offsetLrMove: number;

  @Column("int", { name: "dis_vision" })
  disVision: number;

  @Column("int", { name: "dis_docking" })
  disDocking: number;

  @Column("varchar", { name: "options", nullable: true, length: 100 })
  options: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "position_tag_id" })
  positionTagId: string;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsEquipmentdockings,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "position_tag_id", referencedColumnName: "id" }])
  positionTag: AcsPositiontag;
}
