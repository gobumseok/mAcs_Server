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
    Logger,
    HttpStatus,
    Put,
  } from '@nestjs/common';


import { AmrtypeDto } from '../dto/Amrtype.dto';
import { AmrtypeService } from '../service/Amrtype.service';


@Controller('Amrtype')
export class AmrtypeController {
  private readonly logger = new Logger(AmrtypeController.name);
  constructor(private amrtypeService: AmrtypeService){
     this.amrtypeService = amrtypeService;
  }
  
  //amr type 등록
  @Post()
  async CreateAmrtype(@Body() @Body() amrType: AmrtypeDto):Promise<void>{
    
    await this.amrtypeService.createAmrType(amrType);
     
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() amrType: AmrtypeDto) {
    return this.amrtypeService.Update(id,amrType);
  }

  @Get(':id')
  async getAmrtype(@Param('id') type_id : string) : Promise<AmrtypeDto>{
    return this.amrtypeService.findOne(type_id);
  }

  @Delete(':id')
  async AmrtypeDelete_One(@Param('id') type_id : string) : Promise<void> {
    return await this.amrtypeService.remove(type_id);
  }
  
  //amrtype all 
  @Get()
  async AmrtypeAllList() : Promise<AmrtypeDto[]>{
    return this.amrtypeService.findAll();
  }

  
}
