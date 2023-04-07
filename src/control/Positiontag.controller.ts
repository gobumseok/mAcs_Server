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
  async CreatePositionTag(@Body() bodyData) : Promise<string>{
        
    var return_Data :string;

    this.logger.debug(bodyData.angle);
    if(bodyData['tag_id'].length > 0 ){
      
      
      const positiontagDto = new PositiontagDto(); 
      positiontagDto.tag_id =  bodyData['tag_id'];
      positiontagDto.x = bodyData['x'];
      positiontagDto.y = bodyData['y'];
      positiontagDto.angle = bodyData['angle'];
      positiontagDto.speed = bodyData['speed'];
      positiontagDto.driveMode = bodyData['driveMode'];
      positiontagDto.extraParam = bodyData['extraParam'];
      positiontagDto.precision = bodyData['precision'];
      positiontagDto.isSensor = bodyData['isSensor'];
      positiontagDto.isPause = bodyData['isPause'];
      positiontagDto.parkedSide = bodyData['parkedSide'];
      positiontagDto.isVirtual = bodyData['isVirtual'];
      positiontagDto.createdAt = new Date(bodyData['createdAt']);
      positiontagDto.updatedAt = new Date(bodyData['updatedAt']);    
      positiontagDto.mapId = bodyData['mapId'];
      positiontagDto.typeId = bodyData['typeId'];
      //DB insert
      await this.positionTagService.create_positionTagType(positiontagDto);
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
      
      const positiontagDto = new PositiontagDto(); 
      positiontagDto.tag_id =  bodyData['tag_id'];
      positiontagDto.x = bodyData['x'];
      positiontagDto.y = bodyData['y'];
      positiontagDto.angle = bodyData['angle'];
      positiontagDto.speed = bodyData['speed'];
      positiontagDto.driveMode = bodyData['driveMode'];
      positiontagDto.extraParam = bodyData['extraParam'];
      positiontagDto.precision = bodyData['precision'];
      positiontagDto.isSensor = bodyData['isSensor'];
      positiontagDto.isPause = bodyData['isPause'];
      positiontagDto.parkedSide = bodyData['parkedSide'];
      positiontagDto.isVirtual = bodyData['isVirtual'];
      positiontagDto.createdAt = new Date(bodyData['createdAt']);
      positiontagDto.updatedAt = new Date(bodyData['updatedAt']);    
      positiontagDto.mapId = bodyData['mapId'];
      positiontagDto.typeId = bodyData['typeId'];    
           
      this.logger.debug('body@@WorkPlace-type:description: ' + bodyData['updatedAt'] );
      await this.positionTagService.Update(id,positiontagDto);
      
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
      await this.positionTagService.remove(id);
    }


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.positionTagService.FindAll();
  }

}