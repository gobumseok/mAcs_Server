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
import {CrossroadPositionTagEntity} from './CrossroadPositionTag.entity';


@Entity('crossroad',{schema:'acs'})
export class CrossroadEntity {
  @PrimaryColumn( 'varchar' , {name: 'crossroad_id',length:30 })
  crossroad_id: string;

  @Column("varchar", { name: "cross_id", length: 20 })
  crossId: string;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  //@OneToMany(
  //  () => CrossroadPositionTagEntity,
  //  (CrossroadPositionTag) => CrossroadPositionTag.crossroad
  //)
  //CrossroadPositionTags: CrossroadPositionTagEntity[];
}
