import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsElevator } from "./AcsElevator";
import { AcsPositiontag } from "./AcsPositiontag";

@Index(
  "acs_elevator_ev_position_elevator_id_positiontag__8b900d14_uniq",
  ["elevatorId", "positiontagId"],
  { unique: true }
)
@Index(
  "acs_elevator_ev_posi_positiontag_id_0b864398_fk_acs_posit",
  ["positiontagId"],
  {}
)
@Entity("acs_elevator_ev_position_tag", { schema: "acs_amr" })
export class AcsElevatorEvPositionTag {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "elevator_id" })
  elevatorId: string;

  @Column("bigint", { name: "positiontag_id" })
  positiontagId: string;

  @ManyToOne(
    () => AcsElevator,
    (acsElevator) => acsElevator.acsElevatorEvPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "elevator_id", referencedColumnName: "id" }])
  elevator: AcsElevator;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsElevatorEvPositionTags,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "positiontag_id", referencedColumnName: "id" }])
  positiontag: AcsPositiontag;
}
