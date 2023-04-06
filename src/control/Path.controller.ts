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
  async CreatePositionTag(@Body() bodyData) : Promise<string>{
        
    var return_Data :string;

    if(bodyData['path_id'].length > 0 ){
          
        const pathDto = new PathDto(); 
        pathDto.path_id =  bodyData['path_id'];
        pathDto.isBidirectional = bodyData['isBidirectional'];
        pathDto.createdAt = bodyData['createdAt'];
        pathDto.updatedAt = bodyData['updatedAt'];
        pathDto.fromTagId = bodyData['fromTagId'];
        pathDto.toTagId = bodyData['toTagId'];
        pathDto.createdAt = new Date(bodyData['createdAt']);
        pathDto.updatedAt = new Date(bodyData['updatedAt']);    
        
        //DB insert
        await this.pathService.create_positionTagType(pathDto);
        return_Data = 'Create Data';

    }else{

      return_Data = 'Type error and check Post Data';

    }

    return return_Data;

  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() bodyData ) : Promise<string> {
      
      
    var return_Data :string;

    if(bodyData['tag_id'].length > 0 ){
      
        const pathDto = new PathDto(); 
        pathDto.path_id =  bodyData['path_id'];
        pathDto.isBidirectional = bodyData['isBidirectional'];
        pathDto.createdAt = bodyData['createdAt'];
        pathDto.updatedAt = bodyData['updatedAt'];
        pathDto.fromTagId = bodyData['fromTagId'];
        pathDto.toTagId = bodyData['toTagId'];
        pathDto.createdAt = new Date(bodyData['createdAt']);
        pathDto.updatedAt = new Date(bodyData['updatedAt']);    
            
        this.logger.debug('body@@WorkPlace-type:description: ' + bodyData['updatedAt'] );
        await this.pathService.Update(id,pathDto);
        
        return_Data = 'Update Data';
    
    }
    else{

        return_Data = 'Type error and check Post Data';

    }

    return return_Data;
      //return this.workPlaceService.Update(id,workplace);
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