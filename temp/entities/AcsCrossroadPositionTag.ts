import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsCrossroad } from "./AcsCrossroad";
import { AcsPositiontag } from "./AcsPositiontag";

@Index(
  "acs_crossroad_position_t_crossroad_id_positiontag_9a4fe510_uniq",
  ["crossroadId", "positiontagId"],
  { unique: true }
)
@Index(
  "acs_crossroad_positi_positiontag_id_c8b050b4_fk_acs_posit",
  ["positiontagId"],
  {}
)
@Entity("acs_crossroad_position_tag", { schema: "acs_amr" })
export class AcsCrossroadPositionTag {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "crossroad_id" })
  crossroadId: string;

  @Column("bigint", { name: "positiontag_id" })
  positiontagId: string;

  @ManyToOne(
    () => AcsCrossroad,
    (acsCrossroad) => acsCrossroad.acsCrossroadPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "crossroad_id", referencedColumnName: "id" }])
  crossroad: AcsCrossroad;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsCrossroadPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "positiontag_id", referencedColumnName: "id" }])
  positiontag: AcsPositiontag;
}
