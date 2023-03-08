import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {CrossroadPositionTagEntity} from './CrossroadPositionTag.entity';


@Entity('crossroad',{schema:'acs'})
export class CrossroadEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "cross_id", length: 20 })
  crossId: string;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @OneToMany(
    () => CrossroadPositionTagEntity,
    (CrossroadPositionTag) => CrossroadPositionTag.crossroad
  )
  CrossroadPositionTags: CrossroadPositionTagEntity[];
}
