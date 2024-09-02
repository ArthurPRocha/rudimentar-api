import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.fileService.uploadFileGc(file);
  }
}