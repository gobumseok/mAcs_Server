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

import { WorkPlaceService } from '../service/WorkPlace.service';
import { WorkplaceDto } from '../dto/Workplace.dto';

@Controller('WorkPlace')
export class WorkPlaceController {
    
    
    private readonly logger = new Logger(WorkPlaceController.name);
    constructor(private workPlaceService: WorkPlaceService){
        this.workPlaceService = workPlaceService;
    }


    @Post()
    async CreateWorkPlaceType(@Body() workplaceDto : WorkplaceDto) : Promise<void>{
        
        await this.workPlaceService.createWorkPlace(workplaceDto);
           
    }

    
    @Get()
    async AmrtypeAllList() : Promise<WorkplaceDto[]>{
        return await this.workPlaceService.FindAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() workplaceDto : WorkplaceDto ) : Promise<void> {
        
        await this.workPlaceService.Update(id,workplaceDto);
        
    }

    @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
        return await this.workPlaceService.remove(id);
    }            
    
}  