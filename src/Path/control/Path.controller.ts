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
import { PathDto } from '../dto/Path.dto';
import { PathService } from '../service/Path.service';


@Controller('Path')
export class PathController {

  private readonly logger = new Logger(PathController.name);

  constructor(private pathService: PathService){
    this.pathService = pathService;
  }


  @Post()
  async CreatePositionTag(@Body() pathDto : PathDto ) : Promise<void>{
    await this.pathService.create_Path(pathDto);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() pathDto : PathDto ) : Promise<void> {
      
    await this.pathService.Update(id,pathDto);  
        
  }

  @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
      await this.pathService.remove(id);
    }


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.pathService.FindAll();
  }

}