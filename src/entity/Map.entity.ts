import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmrEntity } from "./Amr.entity";
import { PositiontagEntity } from './Positiontag.entity';
import { WorkplaceEntity } from './Workplace.entity';



@Entity('map',{schema:'acs'})
export class MapEntity {
  
  @PrimaryColumn('varchar', { name: 'map_id', length: 50 })
  map_id: string;

  @Column('varchar', { name: "name", length: 50 })
  name: string;

  @Column('varchar', { name: "floor", length: 30 })
  floor: string;

  @Column('varchar', { name: "map_img", length: 100 })
  mapImg: string;

  @Column('timestamp', { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "work_place_id" })
  workPlaceId: string;

  @Column('double precision', { name: "origin_x"})
  originX: number;

  @Column('double precision', { name: 'origin_y'})
  originY: number;

  @Column('double precision', { name: 'scale'})
  scale: number;
  
  @OneToMany(() => AmrEntity, (Amr) => Amr.map)
  Amrs: AmrEntity[];

  @ManyToOne(() => WorkplaceEntity, (Workplace) => Workplace.Maps, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "work_place_id", referencedColumnName: "work_space_id" }])
  workPlace: WorkplaceEntity;

  @OneToMany(() => PositiontagEntity, (Positiontag) => Positiontag.map)
  Positiontags: PositiontagEntity[];
  
}
