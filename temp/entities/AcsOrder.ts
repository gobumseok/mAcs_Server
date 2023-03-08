import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsJob } from "./AcsJob";
import { AcsAmr } from "./AcsAmr";

@Index("acs_order_amr_id_306528df_fk_acs_amr_id", ["amrId"], {})
@Index("acs_order_created_at_501a29bc", ["createdAt"], {})
@Entity("acs_order", { schema: "acs_amr" })
export class AcsOrder {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "departure", length: 300 })
  departure: string;

  @Column("varchar", { name: "destinations", length: 300 })
  destinations: string;

  @Column("varchar", { name: "parts", length: 300 })
  parts: string;

  @Column("varchar", { name: "state", length: 10 })
  state: string;

  @Column("varchar", { name: "created_by", length: 10 })
  createdBy: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "finished_at", nullable: true })
  finishedAt: Date | null;

  @Column("bigint", { name: "amr_id", nullable: true })
  amrId: string | null;

  @OneToMany(() => AcsJob, (acsJob) => acsJob.order)
  acsJobs: AcsJob[];

  @ManyToOne(() => AcsAmr, (acsAmr) => acsAmr.acsOrders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "amr_id", referencedColumnName: "id" }])
  amr: AcsAmr;
}
