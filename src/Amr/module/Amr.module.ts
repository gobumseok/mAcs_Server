/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmrEntity } from '../entity/Amr.entity';
import { AmrController } from '../control/Amr.controller';
import { AmrService } from '../service/Amr.service';

@Module({
  imports: [TypeOrmModule.forFeature([AmrEntity])],
  providers: [AmrService],
  controllers: [AmrController],
})
export class AmrModule {}
