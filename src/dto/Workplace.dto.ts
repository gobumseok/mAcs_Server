import { MapDto } from './Map.dto';


export class WorkplaceDto {
  
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  version: string | null;
  Maps: MapDto[];
}
