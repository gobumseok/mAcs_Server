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
           
        if(bodyData['map_id'].length > 0 ){
            this.logger.debug('workPlaceId: ' + bodyData['workPlaceId']);

            const mapDto = new MapDto();
            mapDto.map_id = bodyData['map_id'];
            mapDto.name = bodyData['name'];
            mapDto.mapImg = bodyData['mapImg'];
            mapDto.workPlaceId = bodyData['workPlaceId'];
            mapDto.originX = bodyData['originX'];
            mapDto.originY = bodyData['originY'];
            mapDto.scale = bodyData['scale'];
            mapDto.floor = bodyData['floor'];
            mapDto.createdAt = new Date(bodyData['createdAt']);
            mapDto.updatedAt = new Date(bodyData['updatedAt']);
            await this.mapService.createMap(mapDto);
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
    async update(@Param('id') id: string, @Body() bodyData ) : Promise<void> {
        
        const mapDto = new MapDto();
        mapDto.map_id = bodyData['map_id'];
        mapDto.name = bodyData['name'];
        mapDto.mapImg = bodyData['mapImg'];
        mapDto.workPlaceId = bodyData['workPlaceId'];
        mapDto.originX = bodyData['originX'];
        mapDto.originY = bodyData['originY'];
        mapDto.scale = bodyData['scale'];
        mapDto.floor = bodyData['floor'];
        mapDto.createdAt = new Date(bodyData['createdAt']);
        mapDto.updatedAt = new Date(bodyData['updatedAt']);    
        await this.mapService.Update(id,mapDto);
     
    }

    @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
        await this.mapService.remove(id);
    }            
    
}  