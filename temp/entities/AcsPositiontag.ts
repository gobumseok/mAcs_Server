import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsAmr } from "./AcsAmr";
import { AcsCrossroadPositionTag } from "./AcsCrossroadPositionTag";
import { AcsElevatorEvPositionTag } from "./AcsElevatorEvPositionTag";
import { AcsEquipmentautodoor } from "./AcsEquipmentautodoor";
import { AcsEquipmentdocking } from "./AcsEquipmentdocking";
import { AcsPath } from "./AcsPath";
import { AcsMap } from "./AcsMap";
import { AcsPositiontagtype } from "./AcsPositiontagtype";

@Index("tag_id", ["tagId"], { unique: true })
@Index(
  "acs_positiontag_type_id_2a594d3e_fk_acs_positiontagtype_id",
  ["typeId"],
  {}
)
@Index("acs_positiontag_map_id_fcdf2ca4_fk_acs_map_id", ["mapId"], {})
@Entity("acs_positiontag", { schema: "acs_amr" })
export class AcsPositiontag {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "tag_id", unique: true, length: 6 })
  tagId: string;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("double", { name: "x", precision: 22 })
  x: number;

  @Column("double", { name: "y", precision: 22 })
  y: number;

  @Column("double", { name: "speed", precision: 22 })
  speed: number;

  @Column("double", { name: "angle", precision: 22 })
  angle: number;

  @Column("int", { name: "drive_mode" })
  driveMode: number;

  @Column("double", { name: "precision", precision: 22 })
  precision: number;

  @Column("int", { name: "is_sensor" })
  isSensor: number;

  @Column("int", { name: "is_pause" })
  isPause: number;

  @Column("int", { name: "parked_side" })
  parkedSide: number;

  @Column("longtext", { name: "extra_param", nullable: true })
  extraParam: string | null;

  @Column("tinyint", { name: "is_virtual", width: 1 })
  isVirtual: boolean;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "map_id" })
  mapId: string;

  @Column("bigint", { name: "type_id" })
  typeId: string;

  @OneToMany(() => AcsAmr, (acsAmr) => acsAmr.chargingPositionTag)
  acsAmrs: AcsAmr[];

  @OneToMany(() => AcsAmr, (acsAmr) => acsAmr.currentPositionTag)
  acsAmrs2: AcsAmr[];

  @OneToMany(() => AcsAmr, (acsAmr) => acsAmr.prevPositionTag)
  acsAmrs3: AcsAmr[];

  @OneToMany(
    () => AcsCrossroadPositionTag,
    (acsCrossroadPositionTag) => acsCrossroadPositionTag.positiontag
  )
  acsCrossroadPositionTags: AcsCrossroadPositionTag[];

  @OneToMany(
    () => AcsElevatorEvPositionTag,
    (acsElevatorEvPositionTag) => acsElevatorEvPositionTag.positiontag
  )
  acsElevatorEvPositionTags: AcsElevatorEvPositionTag[];

  @OneToMany(
    () => AcsEquipmentautodoor,
    (acsEquipmentautodoor) => acsEquipmentautodoor.inPositionTag
  )
  acsEquipmentautodoors: AcsEquipmentautodoor[];

  @OneToMany(
    () => AcsEquipmentautodoor,
    (acsEquipmentautodoor) => acsEquipmentautodoor.outPositionTag
  )
  acsEquipmentautodoors2: AcsEquipmentautodoor[];

  @OneToMany(
    () => AcsEquipmentdocking,
    (acsEquipmentdocking) => acsEquipmentdocking.positionTag
  )
  acsEquipmentdockings: AcsEquipmentdocking[];

  @OneToMany(() => AcsPath, (acsPath) => acsPath.fromTag)
  acsPaths: AcsPath[];

  @OneToMany(() => AcsPath, (acsPath) => acsPath.toTag)
  acsPaths2: AcsPath[];

  @ManyToOne(() => AcsMap, (acsMap) => acsMap.acsPositiontags, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "map_id", referencedColumnName: "id" }])
  map: AcsMap;

  @ManyToOne(
    () => AcsPositiontagtype,
    (acsPositiontagtype) => acsPositiontagtype.acsPositiontags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: AcsPositiontagtype;
}
