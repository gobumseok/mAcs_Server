import { PositiontagDto} from "./Positiontag.dto";


export class PositiontagtypeDto {
  
  id: string;
  code: number;  
  type: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  Positiontags: PositiontagDto[];
}
