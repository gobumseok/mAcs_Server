import { AmrDto } from './Amr.dto';
import { CallorderDto } from './Callorder.dto';
import { IsDate, IsIn, IsNumberString, IsOptional, IsString } from "class-validator";
import { isDate } from 'util/types';
import { Type } from 'class-transformer';


export class AmrtypeDto {
  

  @IsString()
  id: string;

  @IsString()
  code: string;
  
  @IsString()
  type: string;

  @IsString()
  description: string;
  
  
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;
  
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt: Date;
  
  //Amrs: AmrDto[] | null;

  //@OneToMany(() => CallorderEntity, (acsCallorder) => acsCallorder.amrType)
  //Callorders: CallorderDto[] | null ;
}
