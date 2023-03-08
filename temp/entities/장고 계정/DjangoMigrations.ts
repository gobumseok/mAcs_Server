import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("django_migrations", { schema: "acs_amr" })
export class DjangoMigrations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "app", length: 255 })
  app: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("datetime", { name: "applied" })
  applied: Date;
}
