import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapEntity } from '../entity/Map.entity';
import { MapController } from '../control/Map.controller';
import { MapService } from '../service/Map.service';

@Module({
  imports: [TypeOrmModule.forFeature([MapEntity])],
  providers: [MapService],
  controllers: [MapController],
})
export class MapModule {}