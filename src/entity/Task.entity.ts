import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { JobEntity } from "./Job.entity";


@Entity('task',{schema:'acs'})
export class TaskEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp", { name: "created_at" })
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

  @Column("timestamp", { name: "finished_at", nullable: true })
  finishedAt: Date | null;

  @Column("varchar", { name: "mat_id", length: 200 })
  matId: string;

  @Column("varchar", { name: "mat_type", length: 200 })
  matType: string;

  @Column("int", { name: "task_no" })
  taskNo: number;

  @Column("varchar", { name: "task_type", length: 200 })
  taskType: string;

  @ManyToOne(() => JobEntity, (Job) => Job.acsTasks, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "id" }])
  job: JobEntity;
}
