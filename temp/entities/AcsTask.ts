import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsJob } from "./AcsJob";

@Index("acs_task_job_id_54c55927_fk_acs_job_id", ["jobId"], {})
@Entity("acs_task", { schema: "acs_amr" })
export class AcsTask {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("bigint", { name: "job_id" })
  jobId: string;

  @Column("int", { name: "amr_slot_no_from" })
  amrSlotNoFrom: number;

  @Column("int", { name: "amr_slot_no_to" })
  amrSlotNoTo: number;

  @Column("int", { name: "equ_port_no_from" })
  equPortNoFrom: number;

  @Column("int", { name: "equ_port_no_to" })
  equPortNoTo: number;

  @Column("datetime", { name: "finished_at", nullable: true })
  finishedAt: Date | null;

  @Column("varchar", { name: "mat_id", length: 200 })
  matId: string;

  @Column("varchar", { name: "mat_type", length: 200 })
  matType: string;

  @Column("int", { name: "task_no" })
  taskNo: number;

  @Column("varchar", { name: "task_type", length: 200 })
  taskType: string;

  @ManyToOne(() => AcsJob, (acsJob) => acsJob.acsTasks, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "id" }])
  job: AcsJob;
}
