export interface ApiResult {
  result: any;
  errorMessage?: string;
}

export interface PhotoRaw {
  id: number;
  description: string;
  username: string;
  createdAt: Date;
}

export interface UserRaw {
  id: string;
  username: string;

  photos: PhotoRaw[];
}
