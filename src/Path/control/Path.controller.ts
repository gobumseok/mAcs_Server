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
import { PositiontagDto} from '../../PositionTag/dto/Positiontag.dto';
import { PathService } from '../service/Path.service';


@Controller('Path')
export class PathController {

  private readonly logger = new Logger(PathController.name);

  constructor(private pathService: PathService){
    this.pathService = pathService;
  }


  @Post()
  async CreatePath(@Body() pathDto : PathDto ) : Promise<void>{
    await this.pathService.create_Path(pathDto);
  }

  @Post(':FindPath')
  async FullPath(@Body() info) : Promise<PositiontagDto[]>{

    let start_tag_id : string = info['start'];
    let end_tag_id : string = info['end'];
    //await this.pathService.create_Path(pathDto);
    return await this.pathService.Find_Path(start_tag_id,end_tag_id);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() pathDto : PathDto ) : Promise<void> {
      
    await this.pathService.Update(id,pathDto);  
        
  }

  @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
      await this.pathService.remove(id);
    }

  @Get('ALL')
  async All_Path_List() : Promise<any>{
    return this.pathService.Relation_FindAll();
  }  


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.pathService.FindAll();
  }

}