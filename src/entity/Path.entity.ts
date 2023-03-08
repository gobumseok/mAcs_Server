import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PositiontagEntity } from "./Positiontag.entity";
//import { AcsPositiontag } from "./AcsPositiontag";

@Entity('path',{schema:'acs'})
export class PathEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("smallint", { name: "is_bidirectional", width: 1 })
  isBidirectional: boolean;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "from_tag_id" })
  fromTagId: string;

  @Column("bigint", { name: "to_tag_id" })
  toTagId: string;
  
  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.fromPaths,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "from_tag_id", referencedColumnName: "id" }])
  fromTag: PositiontagEntity;

  @ManyToOne(
    () => PositiontagEntity,
    (Positiontag) => Positiontag.toPaths,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "to_tag_id", referencedColumnName: "id" }])
  toTag: PositiontagEntity;
  
}
