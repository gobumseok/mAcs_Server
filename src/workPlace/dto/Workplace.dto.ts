import { MapDto } from '../../Map/dto/Map.dto';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty} from 'class-validator';


export class WorkplaceDto {
  
  @IsString()
  work_space_id: string;
 
  @IsString()
  name: string;
  
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsString()
  version: string | null;
  //Maps: MapDto[] | null;
}
