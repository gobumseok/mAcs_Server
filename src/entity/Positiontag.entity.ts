import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmrEntity } from './Amr.entity';
import { CrossroadPositionTagEntity } from './CrossroadPositionTag.entity';
//import { AcsElevatorEvPositionTagEntity } from "./AcsElevatorEvPositionTag.entity";
//import { AcsEquipmentautodoorEntity } from './AcsEquipmentautodoor.entity';
//import { AcsEquipmentdockingEntity } from './AcsEquipmentdocking.entity';
import { PathEntity } from './Path.entity';
import { MapEntity } from './Map.entity';
import { PositiontagtypeEntity } from "./Positiontagtype.entity";


@Entity("positiontag",{schema:'acs'})
export class PositiontagEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "tag_id", unique: true, length: 6 })
  tagId: string;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("double precision", { name: "x" })
  x: number;

  @Column("double precision", { name: "y" })
  y: number;

  @Column("double precision", { name: "speed"})
  speed: number;

  @Column("double precision", { name: "angle"})
  angle: number;

  @Column("int", { name: "drive_mode" })
  driveMode: number;

  @Column("double precision", { name: "precision" })
  precision: number;

  @Column("int", { name: "is_sensor" })
  isSensor: number;

  @Column("int", { name: "is_pause" })
  isPause: number;

  @Column("int", { name: "parked_side" })
  parkedSide: number;

  @Column("text", { name: "extra_param", nullable: true })
  extraParam: string | null;

  @Column("smallint", { name: "is_virtual", width: 1 })
  isVirtual: boolean;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "map_id" })
  mapId: string;

  @Column("bigint", { name: "type_id" })
  typeId: string;

  
  @OneToMany(() => AmrEntity, (acsAmr) => acsAmr.chargingPositionTag)
  Amrs: AmrEntity[];

  @OneToMany(() => AmrEntity, (acsAmr) => acsAmr.currentPositionTag)
  acsAmrs2: AmrEntity[];

  @OneToMany(() => AmrEntity, (acsAmr) => acsAmr.prevPositionTag)
  acsAmrs3: AmrEntity[];
  

  @ManyToOne(() => MapEntity, (Map) => Map.Positiontags, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "map_id", referencedColumnName: "id" }])
  map: MapEntity;

  
  @OneToMany(
    () => CrossroadPositionTagEntity,
    (acsCrossroadPositionTag) => acsCrossroadPositionTag.positiontag
  )
  CrossroadPositionTags: CrossroadPositionTagEntity[];
  /*
  @OneToMany(
    () => AcsElevatorEvPositionTagEntity,
    (acsElevatorEvPositionTag) => acsElevatorEvPositionTag.positiontag
  )
  acsElevatorEvPositionTags: AcsElevatorEvPositionTagEntity[];
  
  @OneToMany(
    () => AcsEquipmentautodoorEntity,
    (acsEquipmentautodoor) => acsEquipmentautodoor.inPositionTag
  )
  acsEquipmentautodoors: AcsEquipmentautodoorEntity[];

  @OneToMany(
    () => AcsEquipmentautodoorEntity,
    (acsEquipmentautodoor) => acsEquipmentautodoor.outPositionTag
  )
  acsEquipmentautodoors2: AcsEquipmentautodoorEntity[];

  @OneToMany(
    () => AcsEquipmentdockingEntity,
    (acsEquipmentdocking) => acsEquipmentdocking.positionTag
  )
  acsEquipmentdockings: AcsEquipmentdockingEntity[];
  */  
  @OneToMany(() => PathEntity, (Path) => Path.fromTag)
  fromPaths: PathEntity[];

  @OneToMany(() => PathEntity, (Path) => Path.toTag)
  toPaths: PathEntity[];

  @ManyToOne(
    () => PositiontagtypeEntity,
    (Positiontagtype) => Positiontagtype.Positiontags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: PositiontagtypeEntity;
      
}
