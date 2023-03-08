import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsPositiontag } from "./AcsPositiontag";
import { AcsEquipmentautodoorlog } from "./AcsEquipmentautodoorlog";

@Index(
  "acs_equipmentautodoo_in_position_tag_id_7f25ad60_fk_acs_posit",
  ["inPositionTagId"],
  {}
)
@Index(
  "acs_equipmentautodoo_out_position_tag_id_e0c715d0_fk_acs_posit",
  ["outPositionTagId"],
  {}
)
@Entity("acs_equipmentautodoor", { schema: "acs_amr" })
export class AcsEquipmentautodoor {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("tinyint", { name: "is_use_door", width: 1 })
  isUseDoor: boolean;

  @Column("varchar", { name: "ip", length: 100 })
  ip: string;

  @Column("varchar", { name: "port", length: 100 })
  port: string;

  @Column("varchar", { name: "options", nullable: true, length: 100 })
  options: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("tinyint", { name: "is_door_open", width: 1 })
  isDoorOpen: boolean;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "in_position_tag_id" })
  inPositionTagId: string;

  @Column("bigint", { name: "out_position_tag_id" })
  outPositionTagId: string;

  @Column("datetime", { name: "in_position_tag_reading_at", nullable: true })
  inPositionTagReadingAt: Date | null;

  @Column("datetime", { name: "out_position_tag_reading_at", nullable: true })
  outPositionTagReadingAt: Date | null;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsEquipmentautodoors,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "in_position_tag_id", referencedColumnName: "id" }])
  inPositionTag: AcsPositiontag;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsEquipmentautodoors2,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "out_position_tag_id", referencedColumnName: "id" }])
  outPositionTag: AcsPositiontag;

  @OneToMany(
    () => AcsEquipmentautodoorlog,
    (acsEquipmentautodoorlog) => acsEquipmentautodoorlog.autoDoor
  )
  acsEquipmentautodoorlogs: AcsEquipmentautodoorlog[];
}
