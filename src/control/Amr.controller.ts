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
  Logger,
} from '@nestjs/common';

import { AmrDto } from '../dto/Amr.dto';
import { AmrService } from '../service/Amr.service';


//amr state 관리
@Controller('Amr')
export class AmrController {

  private readonly logger = new Logger(AmrController.name);
  constructor(private amrService: AmrService) {}
  
  
  @Post()
  async createAmr(@Body() amrDto : AmrDto): Promise<void> {
    this.logger.debug(amrDto.amrId);
    await this.amrService.createAmr(amrDto);
  }

  @Put(':id')
  async updataAmr(@Param('id') id, @Body() amrDto : AmrDto){

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
  async remove(@Param('id') id: string): Promise<void> {
    await this.amrService.remove(id);
  }
  
}
