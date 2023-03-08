
import { JobDto } from "./Job.dto";

export class TaskDto {
 
  id: string;
  createdAt: Date;
  jobId: string;
  amrSlotNoFrom: number;
  amrSlotNoTo: number;
  equPortNoFrom: number;
  equPortNoTo: number;
  finishedAt: Date | null;
  matId: string;
  matType: string;
  taskNo: number;
  taskType: string;
  job: JobDto;
}
