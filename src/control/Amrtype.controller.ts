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
  async Amrtype(@Body() bodyData):Promise<any>{
    
    this.logger.debug(bodyData);
    //body 파싱(amrtype 생성)
    const amrType = new AmrtypeDto();
    //amrType.id = bodyData['id'];
    amrType.code = bodyData['code'];
    amrType.type = bodyData['type'];
    amrType.description = bodyData['description'];
    amrType.createdAt = new Date(bodyData['createdAt']);
    amrType.updatedAt = new Date(bodyData['updatedAt']);
    
    
    this.logger.debug('body@@amr-type:description: ' + amrType.description);
    var flag = await this.amrtypeService.createAmrType(amrType);
    const httpcheck : Number = HttpStatus.OK;
    
    return {
      'state' : flag
    };
    
  }

  //create(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
  //  res.status(HttpStatus.OK).json(createPostDto);

  //amrtype all 
  @Get()
  async AmrtypeAllList(): Promise<AmrtypeEntity[]>{
    return this.amrtypeService.findAll();
  }
}
