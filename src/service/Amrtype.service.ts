/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository , DataSource  } from 'typeorm';
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
    const getid = amrtypeDto.id;
    const getCode = amrtypeDto.code;
    const getType = amrtypeDto.type;
    this.logger.debug(getCode);
    //테이블 내의 중복 쿼리 동작
    const getAmrtypeCnt = await this.amrTypeRepository.createQueryBuilder('Amrtype')
                                 .where('Amrtype.id = :id and Amrtype.type = :type  and Amrtype.code = :code',{id:getid,type:getType,code:getCode})
                                 .getCount();
    
    
    
    //this.logger.debug(getAmrtypeCnt);  
    //중복 데이터가 없으면 insert
    if(getAmrtypeCnt === 0){

      //var cnt = await this.amrTypeRepository.createQueryBuilder('Amrtype')
      //                            .select('nextval(\'acs.amrtype_id_seq\'::regclass)').execute();
      //this.logger.debug('newxtval(): ' + cnt);
      await this.amrTypeRepository.save(amrtypeDto);
      //await this.amrTypeRepository.createQueryBuilder('Amrtype')
      //                            .insert()
      //                            .into(AmrtypeEntity,['nextval(acs.amrtype_id_seq)','code','type','description','createdAt','updatedAt'])
      //                            .values(,amrtypeDto.code);
      //      .in
      //flag = true; 
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


  
  
  async remove(id: string): Promise<any> {
    return await this.amrTypeRepository.delete({id : id});
  }
}
