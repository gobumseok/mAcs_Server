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
import { PositiontagDto } from '../dto/Positiontag.dto';
import { PositionTagService } from '../service/PositionTag.service';


@Controller('PositionTag')
export class PositionTagController {

  private readonly logger = new Logger(PositionTagController.name);

  constructor(private positionTagService: PositionTagService){
    this.positionTagService = positionTagService;
  }


  @Post()
  async CreatePositionTag(@Body() positiontagDto : PositiontagDto) : Promise<void>{
        
    await this.positionTagService.create_positionTagType(positiontagDto);
    
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() positiontagDto : PositiontagDto) : Promise<void> {
      
    this.logger.debug(positiontagDto.tag_id);
    await this.positionTagService.Update(id,positiontagDto);
    
  }

  @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
      await this.positionTagService.remove(id);
    }


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.positionTagService.FindAll();
  }

}