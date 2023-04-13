import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmrEntity } from '../../Amr/entity/Amr.entity';
import { CrossroadPositionTagEntity } from '../../entity/CrossroadPositionTag.entity';
//import { AcsElevatorEvPositionTagEntity } from "./AcsElevatorEvPositionTag.entity";
//import { AcsEquipmentautodoorEntity } from './AcsEquipmentautodoor.entity';
//import { AcsEquipmentdockingEntity } from './AcsEquipmentdocking.entity';
import { PathEntity } from '../../Path/entity/Path.entity';
import { MapEntity } from '../../Map/entity/Map.entity';
import { PositiontagtypeEntity } from "../../PositionTagType/entity/Positiontagtype.entity";


@Entity('positiontag',{schema:'acs'})
export class PositiontagEntity {
  
  @PrimaryColumn('varchar', { name: 'tag_id', length: 30 })
  tag_id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 30 })
  name: string | null;

  @Column('double precision', { name: 'x' })
  x: number;

  @Column('double precision', { name: 'y' })
  y: number;

  @Column('double precision', { name: 'speed'})
  speed: number;

  @Column('double precision', { name: 'angle'})
  angle: number;

  @Column('int', { name: 'drive_mode' })
  driveMode: number;

  @Column('double precision', { name: 'precision' })
  precision: number;

  @Column('int', { name: 'is_sensor' })
  isSensor: number;

  @Column('int', { name: 'is_pause' })
  isPause: number;

  @Column('int', { name: 'parked_side' })
  parkedSide: number;

  @Column('text', { name: 'extra_param', nullable: true })
  extraParam: string | null;

  @Column('smallint', { name: 'is_virtual', width: 1 })
  isVirtual: number;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'map_id',length:30 })
  mapId: string;

  @Column('varchar', { name: 'type_id',length:30})
  typeId: string;

  
  @OneToMany(() => AmrEntity, (Amr) => Amr.chargingPositionTag)
  chargingAmrs: AmrEntity[];

  @OneToMany(() => AmrEntity, (Amr) => Amr.chargingPositionTag)
  currentPositionAmrs: AmrEntity[];

  @OneToMany(() => AmrEntity, (Amr) => Amr.prevPositionTag)
  prevPositionAmrs: AmrEntity[];
  

  @ManyToOne(() => MapEntity, (Map) => Map.Positiontags, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "map_id", referencedColumnName: "map_id" }])
  map: MapEntity;

  
  //@OneToMany(
  //  () => CrossroadPositionTagEntity,
  //  (CrossroadPositionTag) => CrossroadPositionTag.positiontag
  //)
  //CrossroadPositionTags: CrossroadPositionTagEntity[];
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
  @JoinColumn([{ name: 'type_id', referencedColumnName: 'type_id' }])
  type: PositiontagtypeEntity;
      
}
