/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { AmrtypeEntity } from '../entity/Amrtype.entity';
import { AmrtypeDto  } from '../dto/Amrtype.dto';

@Injectable()
export class AmrtypeService {

  private readonly logger = new Logger(AmrtypeService.name);
  constructor(
    @InjectRepository(AmrtypeEntity)
    private readonly amrTypeRepository: Repository<AmrtypeEntity>,
  ) {}


  async createAmrType(amrtypeDto: AmrtypeDto) : Promise<boolean> {

    
    //테이블 내의 중복 테이터 조회 
    var flag : boolean = false; 
    const getCode = amrtypeDto.code;
    const getType = amrtypeDto.type;
    this.logger.debug(getCode);
    //테이블 내의 중복 쿼리 동작
    const getAmrtypeCnt = await this.amrTypeRepository.createQueryBuilder('Amrtype')
                                 .where('Amrtype.type = :type  and Amrtype.code = :code',{type:getType,code:getCode})
                                 .getCount();
    
    this.logger.debug(getAmrtypeCnt);  
    //중복 데이터가 없으면 insert
    if(getAmrtypeCnt === 0){
      await this.amrTypeRepository.save(amrtypeDto);
      flag = true; 
    }else{
      this.logger.debug('check');
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


  
  
  async remove(id: number): Promise<void> {
    await this.amrTypeRepository.delete(id);
  }
}
