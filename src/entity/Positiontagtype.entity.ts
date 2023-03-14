import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PositiontagEntity } from "./Positiontag.entity";

@Entity('positiontagtype',{schema:'acs'})
export class PositiontagtypeEntity {
  
  @PrimaryColumn('varchar',{name:'type_id',length:30})
  type_id: string;

  @Column('int', { name: 'code' })
  code: number;

  @Column('varchar', { name: 'type', length: 30 })
  type: string;

  @Column('varchar', { name: 'description', nullable: true, length: 50 })
  description: string | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => PositiontagEntity, (Positiontag) => Positiontag.type)
  Positiontags: PositiontagEntity[];
}
