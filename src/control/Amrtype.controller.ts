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
import { AmrtypeEntity } from '../entity/Amrtype.entity';
import { AmrtypeService } from '../service/Amrtype.service';


@Controller('Amrtype')
export class AmrtypeController {
  private readonly logger = new Logger(AmrtypeController.name);
  constructor(private amrtypeService: AmrtypeService){
     this.amrtypeService = amrtypeService;
  }
  
  //amr type 등록
  @Post()
  async CreateAmrtype(@Body() bodyData):Promise<any>{
    
    this.logger.debug(bodyData);
    

    const amrType = new AmrtypeDto();
    amrType.code = bodyData['code'];
    amrType.type_id = bodyData['type_id'];
    amrType.description = bodyData['description'];
    amrType.createdAt = bodyData['createdAt'];
    amrType.updatedAt = bodyData['updatedAt'];
    
    this.logger.debug('body@@amr-type:description: ' + bodyData);
    var flag = await this.amrtypeService.createAmrType(amrType);
    
    
    return {
      'state' : flag
    };
    
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() amrType: AmrtypeDto) {
    return this.amrtypeService.Update(id,amrType);
  }

  @Get(':id')
  async getAmrtype(@Param('id') type_id : string) : Promise<AmrtypeEntity>{
    return this.amrtypeService.findOne(type_id);
  }

  @Delete(':id')
  async AmrtypeDelete_One(@Param('id') type_id : string) : Promise<void> {
    return await this.amrtypeService.remove(type_id);
  }
  

  //amrtype all 
  @Get()
  async AmrtypeAllList() : Promise<AmrtypeEntity[]>{
    return this.amrtypeService.findAll();
  }
}
