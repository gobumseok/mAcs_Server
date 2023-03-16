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
} from '@nestjs/common';

import { AmrEntity } from '../entity/Amr.entity';
import { AmrService } from '../service/Amr.service';
@Controller('Amr')
export class AmrController {
  constructor(private amrService: AmrService) {}
  //@Post()
  //create(@Body() createUserDto: AcsAgvDto): Promise<AcsAgvEntity> {
  //  return this.acsAgvService.create(createUserDto);
  //}

  @Get()
  findAll(): Promise<AmrEntity[]> {
    return this.amrService.findAll();
  }

  //@Get()
  //async findAll(@Res() res:Response) {
  //  const respanse = await this.acsAgvService.findAll();
  //  return respanse;
  //}

  //@Get('/amr_id/:amr_id')
  //findAGV(@Param('amr_id') amr_id: string): Promise<AmrEntity> {
  //  return this.acsAmrService.findAMR(amr_id);
  //}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AmrEntity> {
    return this.amrService.findOne(id);
  }

  //@Delete(':id')
  //remove(@Param('id') id: number): Promise<void> {
  //  return this.acsAgvService.remove(id);
  //}
}
