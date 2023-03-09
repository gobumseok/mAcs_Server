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
  async Amrtype(@Body() armType : AmrtypeDto) : Promise<string>{
    
    await this.amrtypeService.Save(armType);
    return Object.assign({
      data: { ...armType },
      statusCode: 201,
      statusMsg: `saved successfully`,
    });
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
