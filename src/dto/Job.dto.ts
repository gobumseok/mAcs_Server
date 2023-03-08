import { OrderDto } from './Order.dto';
import { TaskDto } from './Task.dto';

export class JobDto {
  
  id: string;
  jobId: string;
  createdAt: Date;
  finishedAt: Date | null;
  route: string;
  orderId: string | null;
  departure: string;
  destination: string;
  jobType: number;
  cmpltType: string | null;
  isAccepted: boolean;
  order: OrderDto;
  acsTasks: TaskDto[];
}
