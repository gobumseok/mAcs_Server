import { MapDto } from './Map.dto';


export class WorkplaceDto {
  
  work_space_id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  version: string | null;
  //Maps: MapDto[] | null;
}
