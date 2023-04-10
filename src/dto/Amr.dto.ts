import { MapDto } from './Map.dto';
import { AmrtypeDto } from './Amrtype.dto';
//import { AcsEquipmentautodoorlogEntity  } from './AcsEquipmentautodoorlog.entity';
//import { AcsManualorderEntity } from './AcsManualorder.entity';
import { OrderDto } from './Order.dto';
import { PositiontagDto } from './Positiontag.dto';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEmpty} from 'class-validator';


export class AmrDto {
  
  @IsString()
  amrId: string;

  @IsString()
  msgType: string;

  @IsString()
  msgId: string;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  angle: number;

  @IsNumber()
  battery: number;

  @IsString()
  mode: string;

  @IsString()
  state: string;

  @IsString()
  status: string;

  @IsString()
  equipmentStatus: string;

  @IsString()
  slots: string;

  @IsString()
  errorCode: string;

  @IsString()
  description: string;
  
  @IsString()
  isCrossroad: string | null;
  
  @IsNumber()
  isStatisticsIncluded: number;
  
  
  @IsOptional()
  @IsDate()
  readingTagAt?: Date | null;
  
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;


  @IsOptional()
  @IsString()
  currentPositionTagId: string | null;
  
  @IsString()
  mapId: string;
  
  @IsString()
  typeId: string;

  
  @IsOptional()
  @IsString()
  prevPositionTagId: string | null;
  
  @IsDate()
  @IsOptional()
  readingPrevTagAt: Date | null;
  
  @IsString()
  @IsOptional()
  chargingPositionTagId: string | null;
  
  
  type: AmrtypeDto;

  //충전 도킹 포인트
  chargingPositionTag: PositiontagDto;
  currentPositionTag: PositiontagDto;
  prevPositionTag: PositiontagDto;
  //맵 
  map: MapDto;
  //Orders: OrderDto[];
    
}
