import { CrossroadDto } from './Crossroad.dto';
import { PositiontagDto } from './Positiontag.dto';



export class CrossroadPositionTagDto {
  
  id: string;
  crossroadId: string;
  positiontagId: string;
  crossroad: CrossroadDto;
  //교차로 위치
  positiontag: PositiontagDto;
}
