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

import { MapService } from '../service/Map.service';
import { MapDto } from '../dto/Map.dto';

@Controller('Map')
export class MapController {
    
    
    private readonly logger = new Logger(MapController.name);
    constructor(private mapService: MapService){
        this.mapService = mapService;
    }


    @Post()
    async CreateMap(@Body() bodyData) : Promise<string>{
        
        
        var return_Data :string;
           
        if(bodyData['work_space_id'].length > 0 ){
            /**
            const workplaceDto = new WorkplaceDto(); 
            workplaceDto.work_space_id =  bodyData['work_space_id'];
            workplaceDto.name = bodyData['name'];
            workplaceDto.version = bodyData['version'];
            workplaceDto.createdAt = new Date(bodyData['createdAt']);
            workplaceDto.updatedAt = new Date(bodyData['updatedAt']);    
            
            //DB insert
            await this.workPlaceService.createWorkPlace(workplaceDto);
             */
            return_Data = 'Create Data';

        }else{
            return_Data = 'Type error and check Post Data';
        }
        
        
        return return_Data;
    }

    
    @Get()
    async MapAllList() : Promise<MapDto[]>{
        return await this.mapService.FindAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() bodyData ) : Promise<string> {
        
        /** 
        const workplaceDto = new WorkplaceDto();
        workplaceDto.work_space_id =  bodyData['work_space_id'];
        workplaceDto.name = bodyData['name'];
        workplaceDto.version = bodyData['version'];
        workplaceDto.createdAt = new Date(bodyData['createdAt']);
        workplaceDto.updatedAt = new Date(bodyData['updatedAt']);

        this.logger.debug('body@@WorkPlace-type:description: ' + bodyData['updatedAt'] );
        */

        //return await this.mapService.Update(id,workplaceDto);
        return 'test';
    }

    @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
        await this.mapService.remove(id);
    }            
    
}  