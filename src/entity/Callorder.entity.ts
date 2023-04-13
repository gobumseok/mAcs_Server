import { Column, Entity, PrimaryGeneratedColumn,Index,ManyToOne,JoinColumn, PrimaryColumn } from 'typeorm';
import { AmrtypeEntity } from '../Amrtype/entity/Amrtype.entity';


@Entity('callorder',{schema:'acs'})
export class CallorderEntity {
  
  @PrimaryColumn('varchar', { name:'call_order_id', length: 200 })
  callOrderId: string;

  @Column('varchar', { name: 'departure', length: 300 })
  departure: string;

  @Column('varchar', { name: 'destinations', length: 300 })
  destinations: string;

  @Column('text', { name: 'log', nullable: true })
  log: string | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('varchar', { name: 'amr_type_id',length:30 })
  amrTypeId: string;

  @ManyToOne(() => AmrtypeEntity, (Amrtype) => Amrtype.Callorders, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'amr_type_id', referencedColumnName: 'type_id' }])
  amrType: AmrtypeEntity;
}
