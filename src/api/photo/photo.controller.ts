import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Session,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Photo } from '@app/entities';
import { PhotoService } from './photo.service';
import { PhotoResourceInterceptor } from './photo-resource.interceptor';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Get()
  @UseInterceptors(PhotoResourceInterceptor)
  findAll(
    @Query('userId') userId: number,
    @Session() session: Record<string, any>,
  ): Promise<Photo[]> {
    return this.photoService.findByUser(
      userId === undefined ? session.user.id : userId,
    );
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description: string,
  ): Promise<true> {
    const { originalname, path, size } = file;
    const dto = {
      originalname,
      path,
      size,
      description,
    };

    await this.photoService.create(dto);
    return true;
  }
}
