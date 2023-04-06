import {
    Body,
    Controller,
    Get,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { FileService } from './file.service';
import { SampleDto } from './sample.dto';


@Controller()
export class FileController {

  constructor(private readonly fileService: FileService) {}


  /*
  @Post('file')
  @UseInterceptors(FileInterceptor())
  uploadFile(){
    return 'file-upload';
  }
  **/
  /** 
  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(@Body() body: SampleDto, @UploadedFile() file: Express.Multer.File,){
    return {
      body,
      file: file.buffer.toString(),
    };
  }

    @UseInterceptors(FileInterceptor('file'))
    @Post('file/pass-validation')
    uploadFileAndPassValidation(@Body() body: SampleDto,@UploadedFile(new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'json',
        })
        .build({
          fileIsRequired: false,
        }),
    )
    file?: Express.Multer.File,) {
        return {
        body,
        file: file?.buffer.toString(),
        };
    }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file/fail-validation')
  uploadFileAndFailValidation(
    @Body() body: SampleDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpg',
        })
        .build(),
    )
    file: Express.Multer.File,
  ){
        return {
            body,
            file: file.buffer.toString(),
        };
  }
  */

}
