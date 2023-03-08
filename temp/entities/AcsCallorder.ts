import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsAmrtype } from "./AcsAmrtype";

@Index(
  "acs_callorder_amr_type_id_2aa33368_fk_acs_amrtype_id",
  ["amrTypeId"],
  {}
)
@Entity("acs_callorder", { schema: "acs_amr" })
export class AcsCallorder {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "call_order_id", length: 200 })
  callOrderId: string;

  @Column("varchar", { name: "departure", length: 300 })
  departure: string;

  @Column("varchar", { name: "destinations", length: 300 })
  destinations: string;

  @Column("longtext", { name: "log", nullable: true })
  log: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("bigint", { name: "amr_type_id" })
  amrTypeId: string;

  @ManyToOne(() => AcsAmrtype, (acsAmrtype) => acsAmrtype.acsCallorders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "amr_type_id", referencedColumnName: "id" }])
  amrType: AcsAmrtype;
}
