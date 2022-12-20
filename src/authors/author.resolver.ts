import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { Author } from './models/author.model';

@Resolver(() => Author)
export class AuthorResolver {
  constructor() {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {}

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {}
}
