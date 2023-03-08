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
    Req,
    Logger
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
  async Amrtype(@Body() armType) : Promise<void>{
    //data check
    this.logger.debug(armType)
    
    const amrPtype = new AmrtypeDto();
    amrPtype.id = armType['id'];
    amrPtype.description = armType['description'];
    amrPtype.createdAt = new Date(armType['createdAt']);
    amrPtype.updatedAt = new Date(armType['updatedAt']);


    this.logger.debug(amrPtype.createdAt);
    return armType;
    //await this.amrtypeService.Save(armType);
    //return Object.assign({
    //  data: { ...armType },
    //  statusCode: 201,
    //  statusMsg: `saved successfully`,
    //});
  }

  //create(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
  //  res.status(HttpStatus.OK).json(createPostDto);


  @Get()
  GOGOGO(): any{

    const result = {
        cmd : 'die hard',

    };
    return result;
  }
}
