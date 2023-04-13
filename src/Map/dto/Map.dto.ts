
import { AmrDto } from "../../Amr/Dto/Amr.dto";
import { PositiontagDto } from '../../PositionTag/dto/Positiontag.dto';
import { WorkplaceDto } from '../../workPlace/dto/Workplace.dto';
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
