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
  async CreateWorkPlaceType(@Body() bodyData) : Promise<string>{
        
    var return_Data :string;

    if(bodyData['type_id'].length > 0 ){
          
      const positiontagtypeDto = new PositiontagtypeDto(); 
      positiontagtypeDto.type_id =  bodyData['type_id'];
      positiontagtypeDto.type = bodyData['type'];
      positiontagtypeDto.code = bodyData['code'];
      positiontagtypeDto.description = bodyData['description'];
      positiontagtypeDto.createdAt = new Date(bodyData['createdAt']);
      positiontagtypeDto.updatedAt = new Date(bodyData['updatedAt']);    
      
      //DB insert
      await this.positionTagTypeService.create_positionTagType(positiontagtypeDto);
      return_Data = 'Create Data';

    }else{

      return_Data = 'Type error and check Post Data';

    }

    return return_Data;

  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() bodyData ) : Promise<string> {
      
      
    var return_Data :string;

    if(bodyData['type_id'].length > 0 ){
      
      const positiontagtypeDto = new PositiontagtypeDto();
      positiontagtypeDto.type_id =  bodyData['type_id'];
      positiontagtypeDto.type = bodyData['type'];
      positiontagtypeDto.code = bodyData['code'];
      positiontagtypeDto.description = bodyData['description'];
      positiontagtypeDto.createdAt = new Date(bodyData['createdAt']);
      positiontagtypeDto.updatedAt = new Date(bodyData['updatedAt']);   
      this.logger.debug('body@@WorkPlace-type:description: ' + bodyData['updatedAt'] );
      await this.positionTagTypeService.Update(id,positiontagtypeDto);
      
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
      await this.positionTagTypeService.remove(id);
    }


  @Get()
  async PositionTagTypeAllList() : Promise<any>{
    return this.positionTagTypeService.FindAll();
  }

}