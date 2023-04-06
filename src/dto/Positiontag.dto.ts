import { AmrDto } from './Amr.dto';
import { CrossroadPositionTagDto } from './CrossroadPositionTag.dto';
//import { AcsElevatorEvPositionTagEntity } from "./AcsElevatorEvPositionTag.entity";
//import { AcsEquipmentautodoorEntity } from './AcsEquipmentautodoor.entity';
//import { AcsEquipmentdockingEntity } from './AcsEquipmentdocking.entity';
import { PathDto } from './Path.dto';
import { MapDto } from './Map.dto';
import { PositiontagtypeDto } from "./Positiontagtype.dto";



export class PositiontagDto {
  
  tag_id: string;
  name: string | null;
  x: number;
  y: number;
  speed: number;
  angle: number;
  driveMode: number;
  precision: number;
  isSensor: number;
  isPause: number;
  parkedSide: number;
  extraParam: string | null;
  isVirtual: boolean;
  createdAt: Date;
  updatedAt: Date;
  mapId: string;
  typeId: string;
  //Amrs: AmrDto[];

  //acsAmr.currentPositionTag)
  //acsAmrs2: AmrDto[];

  //@OneToMany(() => AmrEntity, (acsAmr) => acsAmr.prevPositionTag)
  //acsAmrs3: AmrDto[];
  

  //@ManyToOne(() => MapEntity, (Map) => Map.Positiontags, {
  //  onDelete: "RESTRICT",
  //  onUpdate: "RESTRICT",
  //})
  //@JoinColumn([{ name: "map_id", referencedColumnName: "id" }])
  //map: MapDto;

  
  //@OneToMany(
  //  () => CrossroadPositionTagEntity,
  //  (acsCrossroadPositionTag) => acsCrossroadPositionTag.positiontag
  //)
  //CrossroadPositionTags: CrossroadPositionTagDto[];
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
  //@OneToMany(() => PathEntity, (Path) => Path.fromTag)
  //fromPaths: PathDto[];

  //@OneToMany(() => PathEntity, (Path) => Path.toTag)
  //toPaths: PathDto[];

  //@ManyToOne(
  //  () => PositiontagtypeEntity,
  //  (Positiontagtype) => Positiontagtype.Positiontags,
  // { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  //)
  //@JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  //type: PositiontagtypeDto;
      
}
