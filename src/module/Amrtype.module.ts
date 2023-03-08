import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmrtypeEntity } from '../entity/Amrtype.entity';
import { AmrtypeController } from '../control/Amrtype.controller';
import { AmrtypeService } from '../service/Amrtype.service';

@Module({
  imports: [TypeOrmModule.forFeature([AmrtypeEntity])],
  providers: [AmrtypeService],
  controllers: [AmrtypeController],
})
export class AmrtypeModule {}