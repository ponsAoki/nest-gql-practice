import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/models/author.model';

@Injectable()
export class PostService {
  async findAll(author: Author) {
    //ここにauthorのId (authorId) を持つpostを全て返す処理を書く
  }
}
