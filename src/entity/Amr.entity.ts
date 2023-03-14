import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MapEntity } from './Map.entity';
import { AmrtypeEntity } from './Amrtype.entity';
//import { AcsEquipmentautodoorlogEntity  } from './AcsEquipmentautodoorlog.entity';
//import { AcsManualorderEntity } from './AcsManualorder.entity';
//import { OrderEntity } from './Order.entity';
import { PositiontagEntity } from './Positiontag.entity';



@Entity('amr',{schema:'acs'})
export class AmrEntity {

  @PrimaryColumn('varchar', { name: 'amr_id', unique: true, length: 30 })
  amrId: string;
  
  @Column('varchar', { name: "msg_type", length: 50 })
  msgType: string;

  @Column('varchar', { name: 'msg_id', length: 50 })
  msgId: string;

  @Column('double precision', { name: 'x'})
  x: string;

  @Column('double precision', { name: 'y' })
  y: string;

  @Column('double precision', { name: 'angle'})
  angle: string;

  @Column('double precision', { name: 'battery'})
  battery: number;

  @Column('varchar', { name: 'mode', length: 10 })
  mode: string;

  @Column('varchar', { name: 'state', length: 10 })
  state: string;

  @Column('varchar', { name: 'status', length: 10 })
  status: string;

  @Column('varchar', { name: 'equipment_status', length: 20 })
  equipmentStatus: string;

  @Column('varchar', { name: 'slots', length: 50 })
  slots: string;

  @Column('varchar', { name: 'error_code', length: 30 })
  errorCode: string;

  @Column('text', { name: 'description' })
  description: string;
  
  @Column('varchar', { name: 'is_crossroad', nullable: true, length: 3 })
  isCrossroad: string | null;

  @Column('smallint', { name: 'is_statistics_included', width: 1 })
  isStatisticsIncluded: boolean;

  @Column('timestamp', { name: 'reading_tag_at', nullable: true })
  readingTagAt: Date | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'current_position_tag_id',length:30,nullable: true })
  currentPositionTagId: string | null;

  @Column('varchar',{ name: 'map_id',length:30 })
  mapId: string;

  @Column('varchar', { name: 'type_id',length:30 })
  typeId: number;

  //@Column('bigint', { name: 'prev_position_tag_id', nullable: true })
  //prevPositionTagId: number | null;

  //@Column('timestamp', { name: 'reading_prev_tag_at', nullable: true })
  //readingPrevTagAt: Date | null;

  @Column('varchar', { name: 'charging_position_tag_id',length:30, nullable: true })
  chargingPositionTagId: string | null;

  //@Column('varchar', {
  //  name: 'ev_destination_floor',
  //  nullable: true,
  //  length: 5,
  //})
  //evDestinationFloor: string | null;

  //amr type 
  @ManyToOne(() => AmrtypeEntity, (Amrtype) => Amrtype.Amrs, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  
  @JoinColumn([{ name: 'type_id', referencedColumnName: 'type_id' }])
  type: AmrtypeEntity;

  
  //충전 도킹 포인트
  @ManyToOne(() => PositiontagEntity, (Positiontag) => Positiontag.chargingAmrs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: 'charging_position_tag_id', referencedColumnName: 'tag_id' },
  ])
  chargingPositionTag: PositiontagEntity;

  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.currentPositionAmrs,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'current_position_tag_id', referencedColumnName: 'tag_id' }])
  currentPositionTag: PositiontagEntity;
  
  
  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.prevPositionAmrs,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'prev_position_tag_id', referencedColumnName: 'tag_id' }])
  prevPositionTag: PositiontagEntity;
  
  //맵 
  @ManyToOne(() => MapEntity, (mainMap) => mainMap.Amrs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: 'map_id', referencedColumnName: 'map_id' }])
  map: MapEntity;
    
  //@OneToMany(() => OrderEntity, (Order) => Order.amr)
  //Orders: OrderEntity[];
  
}
