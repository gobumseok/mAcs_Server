import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsOrder } from "./AcsOrder";
import { AcsTask } from "./AcsTask";

@Index("acs_job_order_id_73011f8f_fk_acs_order_id", ["orderId"], {})
@Index("acs_job_created_at_cc0d3a6d", ["createdAt"], {})
@Entity("acs_job", { schema: "acs_amr" })
export class AcsJob {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "job_id", length: 200 })
  jobId: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "finished_at", nullable: true })
  finishedAt: Date | null;

  @Column("varchar", { name: "route", length: 3000 })
  route: string;

  @Column("bigint", { name: "order_id", nullable: true })
  orderId: string | null;

  @Column("varchar", { name: "departure", length: 300 })
  departure: string;

  @Column("varchar", { name: "destination", length: 300 })
  destination: string;

  @Column("int", { name: "job_type" })
  jobType: number;

  @Column("varchar", { name: "cmplt_type", nullable: true, length: 10 })
  cmpltType: string | null;

  @Column("tinyint", { name: "is_accepted", width: 1 })
  isAccepted: boolean;

  @ManyToOne(() => AcsOrder, (acsOrder) => acsOrder.acsJobs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: AcsOrder;

  @OneToMany(() => AcsTask, (acsTask) => acsTask.job)
  acsTasks: AcsTask[];
}
