/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmrEntity } from '../entity/Amr.entity';
import { AmrDto } from '../dto/Amr.dto';



@Injectable()
export class AmrService {
  constructor(
    @InjectRepository(AmrEntity)
    private readonly amrRepository: Repository<AmrEntity>,
  ) {}


  async createAmr( amrDto : AmrDto) : Promise<void>{
    this.amrRepository.insert(amrDto);
  } 

  async Update(id : string, amrDto : AmrDto) : Promise<void>{
    this.amrRepository.createQueryBuilder()
                          .update(amrDto)
                          .where('amrId = :amrId',{amrId: id})
                          .execute();
  }


  async findAll(): Promise<AmrDto[]> {
    return await this.amrRepository.find({
      relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },
    });
  }

  async findOne(id: string): Promise<AmrDto> {
    return await this.amrRepository.findOne({ 
      where : {amrId : id},
      relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },
    
    
    });
  }
  
  
  async remove(amr_Id: number): Promise<void> {
    await this.amrRepository.delete(amr_Id);
  }
}
