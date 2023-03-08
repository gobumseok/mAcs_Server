import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcsCrossroadPositionTag } from "./AcsCrossroadPositionTag";

@Entity("acs_crossroad", { schema: "acs_amr" })
export class AcsCrossroad {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "cross_id", length: 20 })
  crossId: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @OneToMany(
    () => AcsCrossroadPositionTag,
    (acsCrossroadPositionTag) => acsCrossroadPositionTag.crossroad
  )
  acsCrossroadPositionTags: AcsCrossroadPositionTag[];
}
