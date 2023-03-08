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
import { AcsMap } from "./AcsMap";
import { AcsAmrtype } from "./AcsAmrtype";
import { AcsEquipmentautodoorlog } from "./AcsEquipmentautodoorlog";
import { AcsManualorder } from "./AcsManualorder";
import { AcsOrder } from "./AcsOrder";

@Index("amr_id", ["amrId"], { unique: true })
@Index(
  "acs_amr_current_position_tag_id_ea6951a9_fk_acs_positiontag_id",
  ["currentPositionTagId"],
  {}
)
@Index("acs_amr_map_id_8e2d5dd8_fk_acs_map_id", ["mapId"], {})
@Index("acs_amr_type_id_ca307ffc_fk_acs_amrtype_id", ["typeId"], {})
@Index(
  "acs_amr_prev_position_tag_id_4f4a183e_fk_acs_positiontag_id",
  ["prevPositionTagId"],
  {}
)
@Index(
  "acs_amr_charging_position_tag_id_4f67878a_fk_acs_positiontag_id",
  ["chargingPositionTagId"],
  {}
)
@Entity("acs_amr", { schema: "acs_amr" })
export class AcsAmr {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "amr_id", unique: true, length: 30 })
  amrId: string;

  @Column("varchar", { name: "msg_type", length: 50 })
  msgType: string;

  @Column("varchar", { name: "msg_id", length: 50 })
  msgId: string;

  @Column("double", { name: "x", precision: 22 })
  x: number;

  @Column("double", { name: "y", precision: 22 })
  y: number;

  @Column("double", { name: "angle", precision: 22 })
  angle: number;

  @Column("double", { name: "battery", precision: 22 })
  battery: number;

  @Column("varchar", { name: "mode", length: 10 })
  mode: string;

  @Column("varchar", { name: "state", length: 10 })
  state: string;

  @Column("varchar", { name: "status", length: 10 })
  status: string;

  @Column("varchar", { name: "equipment_status", length: 20 })
  equipmentStatus: string;

  @Column("varchar", { name: "slots", length: 50 })
  slots: string;

  @Column("varchar", { name: "error_code", length: 30 })
  errorCode: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("varchar", { name: "is_crossroad", nullable: true, length: 3 })
  isCrossroad: string | null;

  @Column("tinyint", { name: "is_statistics_included", width: 1 })
  isStatisticsIncluded: boolean;

  @Column("datetime", { name: "reading_tag_at", nullable: true })
  readingTagAt: Date | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "current_position_tag_id", nullable: true })
  currentPositionTagId: string | null;

  @Column("bigint", { name: "map_id" })
  mapId: string;

  @Column("bigint", { name: "type_id" })
  typeId: string;

  @Column("bigint", { name: "prev_position_tag_id", nullable: true })
  prevPositionTagId: string | null;

  @Column("datetime", { name: "reading_prev_tag_at", nullable: true })
  readingPrevTagAt: Date | null;

  @Column("bigint", { name: "charging_position_tag_id", nullable: true })
  chargingPositionTagId: string | null;

  @Column("varchar", {
    name: "ev_destination_floor",
    nullable: true,
    length: 5,
  })
  evDestinationFloor: string | null;

  @ManyToOne(() => AcsPositiontag, (acsPositiontag) => acsPositiontag.acsAmrs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "charging_position_tag_id", referencedColumnName: "id" },
  ])
  chargingPositionTag: AcsPositiontag;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsAmrs2,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "current_position_tag_id", referencedColumnName: "id" }])
  currentPositionTag: AcsPositiontag;

  @ManyToOne(() => AcsMap, (acsMap) => acsMap.acsAmrs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "map_id", referencedColumnName: "id" }])
  map: AcsMap;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsAmrs3,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "prev_position_tag_id", referencedColumnName: "id" }])
  prevPositionTag: AcsPositiontag;

  @ManyToOne(() => AcsAmrtype, (acsAmrtype) => acsAmrtype.acsAmrs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: AcsAmrtype;

  @OneToMany(
    () => AcsEquipmentautodoorlog,
    (acsEquipmentautodoorlog) => acsEquipmentautodoorlog.amr
  )
  acsEquipmentautodoorlogs: AcsEquipmentautodoorlog[];

  @OneToMany(() => AcsManualorder, (acsManualorder) => acsManualorder.amr)
  acsManualorders: AcsManualorder[];

  @OneToMany(() => AcsOrder, (acsOrder) => acsOrder.amr)
  acsOrders: AcsOrder[];
}
