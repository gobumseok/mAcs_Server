import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositiontagEntity } from '../entity/Positiontag.entity';
import { PositionTagController } from '../control/PositionTag.controller';
import { PositionTagService } from '../service/PositionTag.service';

@Module({
  imports: [TypeOrmModule.forFeature([PositiontagEntity])],
  providers: [PositionTagService],
  controllers: [PositionTagController],
})
export class PositionTagModule {}