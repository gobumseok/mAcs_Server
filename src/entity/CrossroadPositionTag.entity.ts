import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrossroadEntity } from './Crossroad.entity';
import { PositiontagEntity } from './Positiontag.entity';


@Entity('crossroad_position_tag',{schema:'acs'})
export class CrossroadPositionTagEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "crossroad_id" })
  crossroadId: string;

  @Column("bigint", { name: "positiontag_id" })
  positiontagId: string;

  @ManyToOne(
    () => CrossroadEntity,
    (Crossroad) => Crossroad.CrossroadPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "crossroad_id", referencedColumnName: "id" }])
  crossroad: CrossroadEntity;

  @ManyToOne(
    () => CrossroadEntity,
    (Positiontag) => Positiontag.CrossroadPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "positiontag_id", referencedColumnName: "id" }])
  positiontag: PositiontagEntity;
}
