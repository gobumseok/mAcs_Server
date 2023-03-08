/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmrEntity } from '../entity/Amr.entity';

@Injectable()
export class AmrService {
  constructor(
    @InjectRepository(AmrEntity)
    private readonly acsAmrRepository: Repository<AmrEntity>,
  ) {}

  async findAll(): Promise<AmrEntity[]> {
    return await this.acsAmrRepository.find({
      /*relations:{
        currentPositionTag : true,
        chargingPositionTag : true, 
        map : true,
        prevPositionTag : true,
        type : true
      },*/
    });
  }

  async findOne(id: string): Promise<AmrEntity> {
    return await this.acsAmrRepository.findOne({ 
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
  
  async findAMR(id: string): Promise<AmrEntity> {
    return await this.acsAmrRepository.findOne({ 
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
    await this.acsAmrRepository.delete(id);
  }
}
