
import { MapDto } from './Map.dto';
import { AmrtypeDto } from './Amrtype.dto';
//import { AcsEquipmentautodoorlogEntity  } from './AcsEquipmentautodoorlog.entity';
//import { AcsManualorderEntity } from './AcsManualorder.entity';
import { OrderDto } from './Order.dto';
import { PositiontagDto } from './Positiontag.dto';

export class AmrDto {
  
  id: string;
  amrId: string;
  msgType: string;
  msgId: string;
  x: string;
  y: string;
  angle: string;
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
  currentPositionTagId: number | null;
  mapId: number;
  typeId: number;
  prevPositionTagId: number | null;
  readingPrevTagAt: Date | null;
  chargingPositionTagId: number | null;
  evDestinationFloor: string | null;
  type: AmrtypeDto;

  //충전 도킹 포인트
  chargingPositionTag: PositiontagDto;
  currentPositionTag: PositiontagDto;
  prevPositionTag: PositiontagDto;
  //맵 
  map: MapDto;
  Orders: OrderDto[];
    
}
