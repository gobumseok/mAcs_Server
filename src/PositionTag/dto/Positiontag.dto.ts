import { AmrDto } from '../../Amr/Dto/Amr.dto';
import { CrossroadPositionTagDto } from '../../dto/CrossroadPositionTag.dto';
//import { AcsElevatorEvPositionTagEntity } from "./AcsElevatorEvPositionTag.entity";
//import { AcsEquipmentautodoorEntity } from './AcsEquipmentautodoor.entity';
//import { AcsEquipmentdockingEntity } from './AcsEquipmentdocking.entity';
import { PathDto } from '../../Path/dto/Path.dto';
import { MapDto } from '../../Map/dto/Map.dto';
import { PositiontagtypeDto } from "../../PositionTagType/dto/Positiontagtype.dto";
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty } from 'class-validator';


export class PositiontagDto {
 
  @IsString()
  tag_id: string;
  
  @IsOptional()
  @IsString()
  name: string | null;
  
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  speed: number;

  @IsNumber()
  angle: number;

  @IsNumber()
  driveMode: number;

  @IsNumber()
  precision: number;

  @IsNumber()
  isSensor: number;

  @IsNumber()
  isPause: number;

  @IsNumber()
  parkedSide: number;

  
  @IsOptional()
  @IsString()
  @IsEmpty()
  extraParam: string | null;

  @IsNumber()
  isVirtual: number;

  @IsDate()
  createdAt: Date;
  
  @IsDate()
  updatedAt: Date;
  
  @IsString()
  mapId: string;

  @IsString()
  typeId: string;
  
      
}
