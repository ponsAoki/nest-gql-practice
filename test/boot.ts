import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

export const initTestApplication = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();

  return app;
};
