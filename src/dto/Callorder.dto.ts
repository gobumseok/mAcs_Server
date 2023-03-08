import { AmrtypeDto } from './Amrtype.dto';


export class CallorderDto {
  
  id12: string;
  callOrderId: string;
  departure: string;
  destinations: string;
  log: string | null;
  createdAt: Date;
  amrTypeId: string;
  amrType: AmrtypeDto;
}
