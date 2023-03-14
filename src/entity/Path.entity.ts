import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PositiontagEntity } from "./Positiontag.entity";
//import { AcsPositiontag } from "./AcsPositiontag";

@Entity('path',{schema:'acs'})
export class PathEntity {
  @PrimaryColumn('varchar',{name:'path_id',length:30})
  path_id: string;

  @Column("smallint", { name: "is_bidirectional", width: 1 })
  isBidirectional: boolean;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @Column('varchar', { name: 'from_tag_id',length:30 })
  fromTagId: string;

  @Column('varchar', { name: 'to_tag_id',length:30 })
  toTagId: string;
  
  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.fromPaths,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: 'from_tag_id', referencedColumnName: 'tag_id' }])
  fromTag: PositiontagEntity;

  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.toPaths,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: 'to_tag_id', referencedColumnName: 'tag_id' }])
  toTag: PositiontagEntity;
  
}
