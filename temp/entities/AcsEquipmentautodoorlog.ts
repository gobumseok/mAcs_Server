import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsEquipmentautodoor } from "./AcsEquipmentautodoor";
import { AcsAmr } from "./AcsAmr";

@Index("acs_equipmentautodoorlog_amr_id_775eabff_fk_acs_amr_id", ["amrId"], {})
@Index(
  "acs_equipmentautodoo_auto_door_id_97fa75c1_fk_acs_equip",
  ["autoDoorId"],
  {}
)
@Entity("acs_equipmentautodoorlog", { schema: "acs_amr" })
export class AcsEquipmentautodoorlog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", { name: "check_in_at" })
  checkInAt: Date;

  @Column("datetime", { name: "check_out_at", nullable: true })
  checkOutAt: Date | null;

  @Column("bigint", { name: "amr_id", nullable: true })
  amrId: string | null;

  @Column("bigint", { name: "auto_door_id", nullable: true })
  autoDoorId: string | null;

  @ManyToOne(
    () => AcsEquipmentautodoor,
    (acsEquipmentautodoor) => acsEquipmentautodoor.acsEquipmentautodoorlogs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "auto_door_id", referencedColumnName: "id" }])
  autoDoor: AcsEquipmentautodoor;

  @ManyToOne(() => AcsAmr, (acsAmr) => acsAmr.acsEquipmentautodoorlogs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "amr_id", referencedColumnName: "id" }])
  amr: AcsAmr;
}
