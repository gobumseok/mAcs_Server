
import { PositiontagDto } from "./Positiontag.dto";
//import { AcsPositiontag } from "./AcsPositiontag";


export class PathDto {
  
  path_id: string;
  isBidirectional: boolean;
  createdAt: Date;
  updatedAt: Date;
  fromTagId: string;
  toTagId: string;
  fromTag: PositiontagDto;
  toTag: PositiontagDto;
  
}
