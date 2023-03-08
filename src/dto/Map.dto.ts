
import { AmrDto } from "./Amr.dto";
import { PositiontagDto } from './Positiontag.dto';
import { WorkplaceDto } from './Workplace.dto';



export class MapDto {
  
  id: string;
  name: string;
  floor: string;
  mapImg: string;
  createdAt: Date;
  updatedAt: Date;
  workPlaceId: string;
  originX: number;
  originY: number;
  scale: number;
  Amrs: AmrDto;
  workPlace: WorkplaceDto;
  Positiontags: PositiontagDto[];
  
}
