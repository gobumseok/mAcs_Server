import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("acs_manualpath", { schema: "acs_amr" })
export class AcsManualpath {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "departure", length: 50 })
  departure: string;

  @Column("varchar", { name: "destinations", length: 300 })
  destinations: string;

  @Column("varchar", { name: "manual_path", length: 300 })
  manualPath: string;

  @Column("varchar", { name: "descriptions", nullable: true, length: 300 })
  descriptions: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;
}
