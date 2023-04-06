import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PathEntity } from '../entity/Path.entity';
import { PathController } from '../control/Path.controller';
import { PathService } from '../service/Path.service';

@Module({
  imports: [TypeOrmModule.forFeature([PathEntity])],
  providers: [PathService],
  controllers: [PathController],
})
export class PathModule {}