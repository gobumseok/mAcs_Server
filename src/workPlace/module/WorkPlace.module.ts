import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkplaceEntity } from '../entity/Workplace.entity';
import { WorkPlaceController } from '../control/WorkPlace.controller';
import { WorkPlaceService } from '../service/WorkPlace.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkplaceEntity])],
  providers: [WorkPlaceService],
  controllers: [WorkPlaceController],
})
export class WorkPlaceModule {}