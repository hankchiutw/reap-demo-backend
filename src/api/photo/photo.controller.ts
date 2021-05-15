import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Session,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description: string,
    @Session() session: Record<string, any>,
  ) {
    const { originalname, path, size } = file;
    const dto = {
      userId: session.user.id,
      originalname,
      path,
      size,
      description,
    };

    await this.photoService.create(dto);
    return true;
  }
}
