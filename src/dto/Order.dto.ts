
import { JobDto } from './Job.dto';
import { AmrDto } from '../Amr/Dto/Amr.dto';


export class OrderDto {
  
  id: string;
  departure: string;
  destinations: string;
  parts: string;
  state: string;
  createdBy: string;
  createdAt: Date;
  finishedAt: Date | null;
  amrId: string | null;
  Jobs: JobDto[];
  amr: AmrDto;
}
