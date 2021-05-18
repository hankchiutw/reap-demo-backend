import { Photo } from './photo';

export class User {
  id: number;
  username: string;

  photos: Photo[] = [];
}
