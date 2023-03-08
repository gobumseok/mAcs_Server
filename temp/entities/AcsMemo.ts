import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("acs_memo", { schema: "acs_amr" })
export class AcsMemo {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("longtext", { name: "message" })
  message: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;
}
