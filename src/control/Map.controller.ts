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
    async CreateMap(@Body() mapDto : MapDto) : Promise<void>{
        await this.mapService.createMap(mapDto);
    }

    
    @Get()
    async MapAllList() : Promise<MapDto[]>{
        return await this.mapService.FindAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() mapDto : MapDto ) : Promise<void> {
        
        await this.mapService.Update(id,mapDto);
     
    }

    @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
        await this.mapService.remove(id);
    }            
    
}  