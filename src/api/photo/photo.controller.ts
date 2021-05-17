import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Session,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { Response } from 'express';
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

  @Get(':photoId/static')
  async sendFile(@Param('photoId') photoId: number, @Res() res: Response) {
    const path = await this.photoService.findPath(photoId);

    res.sendFile(path);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @UseInterceptors(PhotoResourceInterceptor)
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description: string,
  ): Promise<Photo> {
    const { originalname, path, size } = file;
    const dto = {
      originalname,
      path,
      size,
      description,
    };

    return await this.photoService.create(dto);
  }
}
