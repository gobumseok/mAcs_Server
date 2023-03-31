import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { WorkplaceEntity } from '../entity/Workplace.entity';
import { WorkplaceDto } from '../dto/Workplace.dto';
 

@Injectable()
export class WorkPlaceService {
  
  private readonly logger = new Logger(WorkPlaceService.name);

  constructor(
      @InjectRepository(WorkplaceEntity)
      private readonly workPlaceRepository: Repository<WorkplaceEntity>,
      
    ) {}

  async createWorkPlace(workPlaceDto : WorkplaceDto) : Promise<void>{
    await this.workPlaceRepository.insert(workPlaceDto);
  }

  async FindAll() : Promise<WorkplaceDto[]>{
    return await this.workPlaceRepository.find();
  }


  async Update(id : string, workplace : WorkplaceDto) : Promise<void>{
    await this.workPlaceRepository.createQueryBuilder()
                          .update(workplace)
                          .where('work_space_id = :work_space_id',{work_space_id: id})
                          .execute();
  }

  async remove(id : string) : Promise<void>{
    await this.workPlaceRepository.createQueryBuilder()
      .where('work_space_id = :work_space_id',{work_space_id: id})
      .delete().execute();
  }

}
