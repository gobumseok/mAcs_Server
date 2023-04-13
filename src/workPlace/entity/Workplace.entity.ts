import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { MapEntity } from '../../Map/entity/Map.entity';

@Entity('workplace' ,{schema:'acs'})
export class WorkplaceEntity {

  @PrimaryColumn('varchar',{name:'work_space_id',length:30,nullable:false} )
  work_space_id: string;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'version', nullable: true, length: 50 })
  version: string | null;

  @OneToMany(() => MapEntity, (Map) => Map.workPlace)
  Maps: MapEntity[];
}
