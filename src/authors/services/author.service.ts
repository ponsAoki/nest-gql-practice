import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  async findOneById(id: number) {
    //ここにidからauthorを取得する処理書く
  }
}
