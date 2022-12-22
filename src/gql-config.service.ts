import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import * as path from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      // typePaths: ['./**/*.graphql']
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    };
  }
}
