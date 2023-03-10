import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { JobEntity } from './Job.entity';
import { AmrEntity } from './Amr.entity';

@Entity('order',{schema:'acs'})
export class OrderEntity {
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

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "finished_at", nullable: true })
  finishedAt: Date | null;

  @Column("bigint", { name: "amr_id", nullable: true })
  amrId: string | null;

  @OneToMany(() => JobEntity, (Job) => Job.order)
  Jobs: JobEntity[];

  //@ManyToOne(() => AmrEntity, (Amr) => Amr.Orders, {
  //  onDelete: "RESTRICT",
  //  onUpdate: "RESTRICT",
  //})
  @JoinColumn([{ name: "amr_id", referencedColumnName: "id" }])
  amr: AmrEntity;
}
