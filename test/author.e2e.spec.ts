import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { initTestApplication } from './boot';

describe('Author API', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await initTestApplication();
  });
  afterAll(async () => {
    await app.close();
  });

  describe('query getAuthorById', () => {
    it('idを返して欲しい', async () => {
      const id = 'id0';
      request(app.getHttpServer());
    });
  });
});
