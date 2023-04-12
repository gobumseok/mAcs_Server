
import { AmrDto } from "./Amr.dto";
import { PositiontagDto } from './Positiontag.dto';
import { WorkplaceDto } from './Workplace.dto';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty} from 'class-validator';


export class MapDto {
  
  @IsString()
  map_id: string;
  
  @IsString()
  name: string;
  
  @IsString()
  floor: string;
  
  @IsString()
  mapImg: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  workPlaceId: string;
  
  @IsNumber()
  originX: number;
  
  @IsNumber()
  originY: number;
  
  @IsNumber()
  scale: number;
  //Amrs: AmrDto;
  //workPlace: WorkplaceDto;
  //Positiontags: PositiontagDto[];
  
}
