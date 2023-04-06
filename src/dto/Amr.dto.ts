
import { IsIn, IsNumberString } from "class-validator";
import { MapDto } from './Map.dto';
import { AmrtypeDto } from './Amrtype.dto';
//import { AcsEquipmentautodoorlogEntity  } from './AcsEquipmentautodoorlog.entity';
//import { AcsManualorderEntity } from './AcsManualorder.entity';
import { OrderDto } from './Order.dto';
import { PositiontagDto } from './Positiontag.dto';

export class AmrDto {
  
  
  amrId: string;
  msgType: string;
  msgId: string;
  x: number;
  y: number;
  angle: number;
  battery: number;
  mode: string;
  state: string;
  status: string;
  equipmentStatus: string;
  slots: string;
  errorCode: string;
  description: string;
  isCrossroad: string | null;
  isStatisticsIncluded: boolean;
  readingTagAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  currentPositionTagId: string | null;
  mapId: string;
  typeId: string;
  prevPositionTagId: string | null;
  readingPrevTagAt: Date | null;
  chargingPositionTagId: string | null;
  evDestinationFloor: string | null;
  type: AmrtypeDto;

  //충전 도킹 포인트
  chargingPositionTag: PositiontagDto;
  currentPositionTag: PositiontagDto;
  prevPositionTag: PositiontagDto;
  //맵 
  //map: MapDto;
  //Orders: OrderDto[];
    
}
