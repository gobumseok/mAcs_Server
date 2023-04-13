import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrossroadEntity } from './Crossroad.entity';
import { PositiontagEntity } from '../PositionTag/entity/Positiontag.entity';


@Entity('crossroad_position_tag',{schema:'acs'})
export class CrossroadPositionTagEntity {
  
  @PrimaryColumn('varchar',{name:'Cross_road_pos_tag_id',length:"30"})
  Cross_road_pos_tag_id: string;

  @Column('varchar', { name: 'crossroad_id' })
  crossroadId: string;

  @Column('varchar', { name: 'positiontag_id' })
  positiontagId: string;

  //@ManyToOne(
  //  () => CrossroadEntity,
  //  (Crossroad) => Crossroad.CrossroadPositionTags,
  //  { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  //)
  //@JoinColumn([{ name: 'crossroad', referencedColumnName: "crossroad_id" }])
  //crossroad: CrossroadEntity;

  //@ManyToOne(
  //  () => CrossroadEntity,
  //  (Positiontag) => Positiontag.CrossroadPositionTags,
  //  { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  //)
  //@JoinColumn([{ name: 'positiontag_id', referencedColumnName: 'tag_id' }])
  //positiontag: PositiontagEntity;
}
