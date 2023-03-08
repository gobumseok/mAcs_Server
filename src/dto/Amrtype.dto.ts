import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AmrDto } from './Amr.dto';
import { CallorderDto } from './Callorder.dto';


export class AmrtypeDto {
  
  id: string;
  code: string;
  type: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  Amrs: AmrDto[];

  //@OneToMany(() => CallorderEntity, (acsCallorder) => acsCallorder.amrType)
  Callorders: CallorderDto[];
}
