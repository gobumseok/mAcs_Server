/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Res,
  Response,
  Body,
  Put,
} from '@nestjs/common';

import { AmrDto } from '../dto/Amr.dto';
import { AmrService } from '../service/Amr.service';


//amr state 관리
@Controller('Amr')
export class AmrController {
  constructor(private amrService: AmrService) {}
  
  
  @Post()
  async createAmr(@Body() bodyData): Promise<string> {
    

    var return_Data :string;

    if(bodyData['amrId'].length > 0 ){
          
        const amrDto = new AmrDto(); 
        amrDto.amrId =  bodyData['amrId'];
        amrDto.msgType =  bodyData['msgType'];
        amrDto.x =  bodyData['x'];
        amrDto.y =  bodyData['y'];
        amrDto.angle =  bodyData['angle'];
        amrDto.battery =  bodyData['battery'];
        amrDto.mode =  bodyData['mode'];
        amrDto.state =  bodyData['state'];
        amrDto.status =  bodyData['status'];
        amrDto.equipmentStatus =  bodyData['equipmentStatus'];
        amrDto.errorCode =  bodyData['errorCode'];
        amrDto.description =  bodyData['description'];
        amrDto.isCrossroad =  bodyData['isCrossroad'];
        amrDto.isStatisticsIncluded = bodyData['isStatisticsIncluded'];
        amrDto.readingTagAt = new Date(bodyData['readingTagAt']);
        amrDto.createdAt = new Date(bodyData['createdAt']);
        amrDto.updatedAt = new Date(bodyData['updatedAt']);    
        amrDto.mapId = bodyData['mapId'];
        amrDto.typeId = bodyData['typeId'];
        amrDto.prevPositionTagId = bodyData['prevPositionTagId'];
        amrDto.readingPrevTagAt = bodyData['readingPrevTagAt'];
        amrDto.currentPositionTagId = bodyData['currentPositionTagId'];
        //DB insert
        //await this.amrService.(amrDto);
        await this.amrService.createAmr(amrDto);
        return_Data = 'Create Data';

    }else{

      return_Data = 'Type error and check Post Data';

    }

    return return_Data;


  }

  @Put(':id')
  async updataAmr(@Param('id') id, @Body() bodyData){

    const amrDto = new AmrDto(); 
    amrDto.amrId =  bodyData['amrId'];
    amrDto.msgType =  bodyData['msgType'];
    amrDto.x =  bodyData['x'];
    amrDto.y =  bodyData['y'];
    amrDto.angle =  bodyData['angle'];
    amrDto.battery =  bodyData['battery'];
    amrDto.mode =  bodyData['mode'];
    amrDto.state =  bodyData['state'];
    amrDto.status =  bodyData['status'];
    amrDto.equipmentStatus =  bodyData['equipmentStatus'];
    amrDto.errorCode =  bodyData['errorCode'];
    amrDto.description =  bodyData['description'];
    amrDto.isCrossroad =  bodyData['isCrossroad'];
    amrDto.isStatisticsIncluded = bodyData['isStatisticsIncluded'];
    amrDto.readingTagAt = new Date(bodyData['readingTagAt']);
    amrDto.createdAt = new Date(bodyData['createdAt']);
    amrDto.updatedAt = new Date(bodyData['updatedAt']);    
    amrDto.mapId = bodyData['mapId'];
    amrDto.typeId = bodyData['typeId'];
    amrDto.prevPositionTagId = bodyData['prevPositionTagId'];
    amrDto.readingPrevTagAt = bodyData['readingPrevTagAt'];
    amrDto.currentPositionTagId = bodyData['currentPositionTagId'];

    await this.amrService.Update(id,amrDto);
  }


  @Get()
  async findAll(): Promise<AmrDto[]> {
    return await this.amrService.findAll();
  }

  @Get(':amr_id')
  async findAGV(@Param('amr_id') amr_id: string): Promise<AmrDto> {
    return await this.amrService.findOne(amr_id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.amrService.remove(id);
  }
}
