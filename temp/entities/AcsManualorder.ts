import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsAmr } from "./AcsAmr";

@Index("acs_manualorder_amr_id_45297045_fk_acs_amr_id", ["amrId"], {})
@Entity("acs_manualorder", { schema: "acs_amr" })
export class AcsManualorder {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "departure", length: 50 })
  departure: string;

  @Column("varchar", { name: "destinations", length: 300 })
  destinations: string;

  @Column("varchar", { name: "descriptions", nullable: true, length: 300 })
  descriptions: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("bigint", { name: "amr_id" })
  amrId: string;

  @ManyToOne(() => AcsAmr, (acsAmr) => acsAmr.acsManualorders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "amr_id", referencedColumnName: "id" }])
  amr: AcsAmr;
}
