import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcsElevatorEvPositionTag } from "./AcsElevatorEvPositionTag";

@Entity("acs_elevator", { schema: "acs_amr" })
export class AcsElevator {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "floor", length: 10 })
  floor: string;

  @Column("tinyint", { name: "is_door_open", width: 1 })
  isDoorOpen: boolean;

  @Column("varchar", { name: "ip", length: 100 })
  ip: string;

  @Column("varchar", { name: "port", length: 100 })
  port: string;

  @Column("varchar", { name: "options", nullable: true, length: 100 })
  options: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(
    () => AcsElevatorEvPositionTag,
    (acsElevatorEvPositionTag) => acsElevatorEvPositionTag.elevator
  )
  acsElevatorEvPositionTags: AcsElevatorEvPositionTag[];
}
