import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
               import { FileController } from './file.controller';
import { FileService } from './file.service';



//파일 업로드 기능 추가
@Module({
  
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
