import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositiontagtypeEntity } from '../entity/Positiontagtype.entity';
import { PositionTagTypeController } from '../control/PositionTagType.controller';
import { PositionTagTypeService } from '../service/PositionTagType.service';

@Module({
  imports: [TypeOrmModule.forFeature([PositiontagtypeEntity])],
  providers: [PositionTagTypeService],
  controllers: [PositionTagTypeController],
})
export class PositionTagTypeModule {}