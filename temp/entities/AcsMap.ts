import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsAmr } from "./AcsAmr";
import { AcsWorkplace } from "./AcsWorkplace";
import { AcsPositiontag } from "./AcsPositiontag";

@Index(
  "acs_map_work_place_id_d65ee853_fk_acs_workplace_id",
  ["workPlaceId"],
  {}
)
@Entity("acs_map", { schema: "acs_amr" })
export class AcsMap {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "floor", length: 30 })
  floor: string;

  @Column("varchar", { name: "map_img", length: 100 })
  mapImg: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "work_place_id" })
  workPlaceId: string;

  @Column("double", { name: "origin_x", precision: 22 })
  originX: number;

  @Column("double", { name: "origin_y", precision: 22 })
  originY: number;

  @Column("double", { name: "scale", precision: 22 })
  scale: number;

  @OneToMany(() => AcsAmr, (acsAmr) => acsAmr.map)
  acsAmrs: AcsAmr[];

  @ManyToOne(() => AcsWorkplace, (acsWorkplace) => acsWorkplace.acsMaps, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "work_place_id", referencedColumnName: "id" }])
  workPlace: AcsWorkplace;

  @OneToMany(() => AcsPositiontag, (acsPositiontag) => acsPositiontag.map)
  acsPositiontags: AcsPositiontag[];
}
