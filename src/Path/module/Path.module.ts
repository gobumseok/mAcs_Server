import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PathEntity } from '../entity/Path.entity';
import { PositiontagEntity } from '../../PositionTag/entity/Positiontag.entity';
import { PathController } from '../control/Path.controller';
import { PathService } from '../service/Path.service';

@Module({
  imports: [TypeOrmModule.forFeature([PathEntity,PositiontagEntity])],
  providers: [PathService],
  controllers: [PathController],
})
export class PathModule {}