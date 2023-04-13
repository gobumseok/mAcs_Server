import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { PositiontagtypeEntity } from '../entity/Positiontagtype.entity'
import { PositiontagtypeDto } from '../dto/Positiontagtype.dto'


@Injectable()
export class PositionTagTypeService{
    private readonly logger = new Logger(PositionTagTypeService.name);

    constructor(
        @InjectRepository(PositiontagtypeEntity)
        private readonly positionTagTypeRepository: Repository<PositiontagtypeEntity>,
      
    ) {}


    async create_positionTagType(positiontagtypeDto : PositiontagtypeDto) : Promise<void>{
        await this.positionTagTypeRepository.insert(positiontagtypeDto);
    }

    async FindAll() : Promise<PositiontagtypeDto[]>{
        return await this.positionTagTypeRepository.find();
    }

    async Update(id : string, positionTagtype : PositiontagtypeDto) : Promise<void>{
        await this.positionTagTypeRepository.createQueryBuilder()
                              .update(positionTagtype)
                              .where('type_id = :type_id',{type_id: id})
                              .execute();
    }


    async remove(id : string) : Promise<void>{
        await this.positionTagTypeRepository.createQueryBuilder()
          .where('type_id = :type_id',{type_id: id})
          .delete().execute();
    }

}