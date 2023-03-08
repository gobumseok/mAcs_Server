import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderEntity } from './Order.entity';
import { TaskEntity } from './Task.entity';


@Entity('job',{schema:'acs'})
export class JobEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "job_id", length: 200 })
  jobId: string;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "finished_at", nullable: true })
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

  @Column("smallint", { name: "is_accepted", width: 1 })
  isAccepted: boolean;

  @ManyToOne(() => OrderEntity, (Order) => Order.Jobs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: OrderEntity;

  @OneToMany(() => TaskEntity, (Task) => Task.job)
  acsTasks: TaskEntity[];
}
