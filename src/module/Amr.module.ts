/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmrEntity } from '../entity/Amr.entity';
import { AmrController } from '../control/AcsAmr.controller';
import { AmrService } from '../service/AcsAmr.service';

@Module({
  imports: [TypeOrmModule.forFeature([AmrEntity])],
  providers: [AmrService],
  controllers: [AmrController],
})
export class AmrModule {}
