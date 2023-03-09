/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmrtypeEntity } from '../entity/Amrtype.entity';
import { AmrtypeDto  } from '../dto/Amrtype.dto';

@Injectable()
export class AmrtypeService {
  constructor(
    @InjectRepository(AmrtypeEntity)
    private readonly amrTypeRepository: Repository<AmrtypeEntity>,
  ) {}


  async createAmrType(amrtypeDto: AmrtypeDto) : Promise<void> {
     await this.amrTypeRepository.save(amrtypeDto)
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
