/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource, IsNull  } from 'typeorm';
import { AmrtypeEntity } from '../entity/Amrtype.entity';
import { AmrtypeDto  } from '../dto/Amrtype.dto';


@Injectable()
export class AmrtypeService {

  private readonly logger = new Logger(AmrtypeService.name);
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    @InjectRepository(AmrtypeEntity)
    private readonly amrTypeRepository: Repository<AmrtypeEntity>,
    
  ) {}


  
  async createAmrType(amrtypeDto: AmrtypeDto) : Promise<void> {

    await this.amrTypeRepository.insert(amrtypeDto);
                         
    
  }

  async findAll(): Promise<AmrtypeDto[]> {
    return await this.amrTypeRepository.find({
      /*relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },*/
    });
  }

  async findOne(id: string): Promise<AmrtypeDto> {
    this.logger.debug('check:: ' + id);
    return await this.amrTypeRepository.findOne({ 
      where : {type_id : id},
      /*relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },*/
    
    
    });
  }
  
  
  async Update(id : string,armType : AmrtypeDto) : Promise<void>{
    this.amrTypeRepository.createQueryBuilder()
                          .update(armType)
                          .where('type_id = :type_id',{type_id: id})
                          .execute();
  }     



  async remove(id: string): Promise<void> {
    this.logger.debug('amr delete test');
    await this.amrTypeRepository.createQueryBuilder('amrtype')
                          .where('type_id = :type_id',{type_id: id})
                          .delete().execute();
  }
}
