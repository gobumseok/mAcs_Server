import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { PathEntity } from '../entity/Path.entity';
import { PathDto } from '../dto/Path.dto';


@Injectable()
export class PathService{
    private readonly logger = new Logger(PathService.name);

    constructor(
        @InjectRepository(PathEntity)
        private readonly pathRepository: Repository<PathEntity>,
      
    ) {}


    async create_positionTagType(pathDto : PathDto) : Promise<void>{
        await this.pathRepository.insert(pathDto);
    }

    async FindAll() : Promise<PathDto[]>{
        return await this.pathRepository.find();
    }

    async Update(id : string, pathDto : PathDto) : Promise<void>{
        await this.pathRepository.createQueryBuilder()
                              .update(pathDto)
                              .where('path_id = :path_id',{path_id: id})
                              .execute();
    }


    async remove(id : string) : Promise<void>{
        await this.pathRepository.createQueryBuilder()
          .where('path_id = :path_id',{path_id: id})
          .delete().execute();
    }

}