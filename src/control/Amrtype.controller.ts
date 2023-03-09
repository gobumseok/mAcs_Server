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
  } from '@nestjs/common';
import { Console } from 'console';

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
  Amrtype(@Body() armType : AmrtypeDto){
    this.logger.debug("asdasd",armType.id);
    
    //await this.amrtypeService.Save(armType);
    const result = {
      cmd : 'die hard2',

  };
    return result;
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
