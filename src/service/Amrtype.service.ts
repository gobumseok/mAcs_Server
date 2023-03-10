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


  async createAmrType(amrtypeDto: AmrtypeDto) : Promise<boolean> {

    
    //테이블 내의 중복 테이터 조회 
    var flag : boolean = false; 
    
    const getCode = amrtypeDto.code;
    const getType_id = amrtypeDto.type_id;
    this.logger.debug('amr type_id: ' + getType_id);
    //테이블 내의 중복 쿼리 동작
    const getAmrtypeObject = await this.amrTypeRepository.createQueryBuilder('Amrtype')
                                 .where('Amrtype.type_id = :type_id and Amrtype.code = :code',{type_id:getType_id,code:getCode})
                                 .getManyAndCount();
    
    
    var amrTypeCount : Number = getAmrtypeObject[1];
    
    if(amrTypeCount > 0){
      this.logger.debug("amr Type List : " + getAmrtypeObject[0]);
      //getAmrType  : AmrtypeEntity = getAmrtypeObject[0];
    }
      
    //중복 데이터가 없으면 insert
    if(amrTypeCount === 0){
      this.logger.debug('save');
      this.amrTypeRepository.save(amrtypeDto);
      flag = true; 
    }else{
      this.logger.debug('같은 타입: ' + amrTypeCount);
      flag = false;
    }
    //중복 데이터가 없으면
    return flag;                             
    
  }

  async findAll(): Promise<AmrtypeEntity[]> {
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

  async findOne(id: string): Promise<AmrtypeEntity> {
    return await this.amrTypeRepository.findOne({ 
      where : {id : id},
      /*relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },*/
    
    
    });
  }
  
  async findAMR(id: string): Promise<AmrtypeEntity> {
    return await this.amrTypeRepository.findOne({ 
      //where : {amrId : id},
      /*relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },*/
    
    
    });
  }


  
  
  async remove(id: string): Promise<void> {
    await this.amrTypeRepository.delete(id);
  }
}
