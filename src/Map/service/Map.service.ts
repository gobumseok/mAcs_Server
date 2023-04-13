import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { MapEntity } from '../entity/Map.entity';
import { MapDto } from '../dto/Map.dto';

@Injectable()
export class MapService {


    private readonly logger = new Logger(MapService.name);
    
    
    constructor(
        @InjectRepository(MapEntity)
        private readonly mapEntityRepository: Repository<MapEntity>,
        
    ) {}


    async createMap( mapDto : MapDto) : Promise<void>{
        await this.mapEntityRepository.insert(mapDto);
      }
    
    async FindAll() : Promise<MapDto[]>{
        return await this.mapEntityRepository.find();
    }
    
    async Update(id : string, mapDto : MapDto) : Promise<void>{
        await this.mapEntityRepository.createQueryBuilder()
                                .update(mapDto)
                                .where('map_id = :map_id',{map_id: id})
                                .execute();
    }
    
    async remove(id : string) : Promise<void>{
        await this.mapEntityRepository.createQueryBuilder()
            .where('map_id = :map_id',{map_id: id})
            .delete().execute();
    }

}