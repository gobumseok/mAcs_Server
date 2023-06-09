import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AmrEntity } from '../../Amr/entity/Amr.entity';
import { CallorderEntity } from '../../entity/Callorder.entity';

@Entity('amrtype',{schema:'acs'})
export class AmrtypeEntity {

  
  @PrimaryColumn('varchar', { name: 'type_id',unique:true,length: 30 })
  type_id: string;

  @Column('varchar', { name: 'code', length: 5 })
  code: string;

  @Column('varchar', { name: 'description', nullable: true, length: 50 })
  description: string | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => AmrEntity, (Amr) => Amr.type)
  Amrs: AmrEntity[];

  @OneToMany(() => CallorderEntity, (Callorder) => Callorder.amrType)
  Callorders: CallorderEntity[];
}
