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
import { PositiontagtypeDto } from '../dto/Positiontagtype.dto';
import { PositionTagTypeService } from '../service/PositionTagType.service'


@Controller('PositionTagType')
export class PositionTagTypeController {

  private readonly logger = new Logger(PositionTagTypeController.name);

  constructor(private positionTagTypeService: PositionTagTypeService){
    this.positionTagTypeService = positionTagTypeService;
  }


  @Post()
  async CreateWorkPlaceType(@Body() positiontagtypeDto : PositiontagtypeDto) : Promise<void>{
        
    //DB insert
    await this.positionTagTypeService.create_positionTagType(positiontagtypeDto);
      
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() positiontagtypeDto :  PositiontagtypeDto) : Promise<void> {
      
    await this.positionTagTypeService.Update(id,positiontagtypeDto);
    
      //return this.workPlaceService.Update(id,workplace);
  }

  @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
      await this.positionTagTypeService.remove(id);
    }


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.positionTagTypeService.FindAll();
  }

}