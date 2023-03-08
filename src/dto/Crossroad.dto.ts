import {CrossroadPositionTagDto} from './CrossroadPositionTag.dto';

export class CrossroadDto {
  
  id: string;
  crossId: string;
  createdAt: Date;
  CrossroadPositionTags: CrossroadPositionTagDto[];
}
