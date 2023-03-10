import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmrEntity } from "./Amr.entity";
import { PositiontagEntity } from './Positiontag.entity';
import { WorkplaceEntity } from './Workplace.entity';


@Index(
  "acs_map_work_place_id_d65ee853_fk_acs_workplace_id",
  ["workPlaceId"],
  {}
)
@Entity("map",{schema:'acs'})
export class MapEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "floor", length: 30 })
  floor: string;

  @Column("varchar", { name: "map_img", length: 100 })
  mapImg: string;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "work_place_id" })
  workPlaceId: string;

  @Column("double precision", { name: "origin_x"})
  originX: number;

  @Column("double precision", { name: "origin_y"})
  originY: number;

  @Column("double precision", { name: "scale"})
  scale: number;
  
  //@OneToMany(() => AmrEntity, (Amr) => Amr.map)
  //Amrs: AmrEntity[];

  @ManyToOne(() => WorkplaceEntity, (acsWorkplace) => acsWorkplace.Maps, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "work_place_id", referencedColumnName: "id" }])
  workPlace: WorkplaceEntity;

  @OneToMany(() => PositiontagEntity, (Positiontag) => Positiontag.map)
  Positiontags: PositiontagEntity[];
  
}
