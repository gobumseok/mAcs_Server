import { AmrtypeDto } from '../Amrtype/dto/Amrtype.dto';


export class CallorderDto {
  
  id: string;
  callOrderId: string;
  departure: string;
  destinations: string;
  log: string | null;
  createdAt: Date;
  amrTypeId: string;
  amrType: AmrtypeDto;
}
