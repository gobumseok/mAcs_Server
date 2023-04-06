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
} from '@nestjs/common';

import { AmrDto } from '../dto/Amr.dto';
import { AmrService } from '../service/Amr.service';



@Controller('Amr')
export class AmrController {
  constructor(private amrService: AmrService) {}
  
  
  @Post()
  async create(@Body() bodyData): Promise<string> {
    

    var return_Data :string;

    if(bodyData['amrId'].length > 0 ){
          
        const amrDto = new AmrDto(); 
        amrDto.amrId =  bodyData['amrId'];
        amrDto.angle = bodyData['angle'];
        amrDto.createdAt = bodyData['createdAt'];
        amrDto.updatedAt = bodyData['updatedAt'];
        
        amrDto.createdAt = new Date(bodyData['createdAt']);
        amrDto.updatedAt = new Date(bodyData['updatedAt']);    
        
        //DB insert
        //await this.amrService.(pathDto);
        return_Data = 'Create Data';

    }else{

      return_Data = 'Type error and check Post Data';

    }

    return return_Data;


  }


  //@Get()
  //findAll(): Promise<AmrEntity[]> {
  //  return this.amrService.findAll();
  //}

  //@Get()
  //async findAll(@Res() res:Response) {
  //  const respanse = await this.acsAgvService.findAll();
  //  return respanse;
  //}

  //@Get('/amr_id/:amr_id')
  //findAGV(@Param('amr_id') amr_id: string): Promise<AmrEntity> {
  //  return this.acsAmrService.findAMR(amr_id);
  //}

  //@Get(':id')
  //findOne(@Param('id') id: string): Promise<AmrEntity> {
  //  return this.amrService.findOne(id);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: number): Promise<void> {
  //  return this.acsAgvService.remove(id);
  //}
}
