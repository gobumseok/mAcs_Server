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
    async CreateWorkPlaceType(@Body() bodyData) : Promise<string>{
        
        
        var return_Data :string;
           
        if(bodyData['work_space_id'].length > 0 ){
            
            const workplaceDto = new WorkplaceDto(); 
            workplaceDto.work_space_id =  bodyData['work_space_id'];
            workplaceDto.name = bodyData['name'];
            workplaceDto.version = bodyData['version'];
            workplaceDto.createdAt = new Date(bodyData['createdAt']);
            workplaceDto.updatedAt = new Date(bodyData['updatedAt']);    
            
            //DB insert
            await this.workPlaceService.createWorkPlace(workplaceDto);
            return_Data = 'Create Data';

        }else{
            return_Data = 'Type error and check Post Data';
        }
        
        
        return return_Data;
    }

    
    @Get()
    async AmrtypeAllList() : Promise<WorkplaceDto[]>{
        return await this.workPlaceService.FindAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() bodyData ) : Promise<void> {
        
        
        const workplaceDto = new WorkplaceDto();
        workplaceDto.work_space_id =  bodyData['work_space_id'];
        workplaceDto.name = bodyData['name'];
        workplaceDto.version = bodyData['version'];
        workplaceDto.createdAt = new Date(bodyData['createdAt']);
        workplaceDto.updatedAt = new Date(bodyData['updatedAt']);

        this.logger.debug('body@@WorkPlace-type:description: ' + bodyData['updatedAt'] );


        return await this.workPlaceService.Update(id,workplaceDto);
        //return this.workPlaceService.Update(id,workplace);
    }

    @Delete(':id')
    async Delete_One(@Param('id') id : string) : Promise<void> {
        return await this.workPlaceService.remove(id);
    }            
    
}  