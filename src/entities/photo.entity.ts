import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalname: string;

  @Column()
  fullpath: string;

  @Column()
  size: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
