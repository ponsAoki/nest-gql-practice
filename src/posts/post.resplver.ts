import { Query, Resolver } from '@nestjs/graphql';
import { string } from 'yargs';
import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => string)
  getDummyPost(): string {
    return 'dummy';
  }
}
