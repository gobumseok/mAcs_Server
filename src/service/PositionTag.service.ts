import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { PositiontagEntity } from '../entity/Positiontag.entity';
import { PositiontagDto } from '../dto/Positiontag.dto';


@Injectable()
export class PositionTagService{
    private readonly logger = new Logger(PositionTagService.name);

    constructor(
        @InjectRepository(PositiontagEntity)
        private readonly positionTagRepository: Repository<PositiontagEntity>,
      
    ) {}


    async create_positionTagType(positiontagDto : PositiontagDto) : Promise<void>{
        await this.positionTagRepository.insert(positiontagDto);
    }

    async FindAll() : Promise<PositiontagDto[]>{
        return await this.positionTagRepository.find();
    }

    async Update(id : string, positiontagDto : PositiontagDto) : Promise<void>{
        await this.positionTagRepository.createQueryBuilder()
                              .update(positiontagDto)
                              .where('tag_id = :tag_id',{tag_id: id})
                              .execute();
    }


    async remove(id : string) : Promise<void>{
        await this.positionTagRepository.createQueryBuilder()
          .where('tag_id = :tag_id',{tag_id: id})
          .delete().execute();
    }

}