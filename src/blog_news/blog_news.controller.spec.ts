import { Test, TestingModule } from '@nestjs/testing';
import { BlogNewsController } from './blog_news.controller';

describe('BlogNewsController', () => {
  let controller: BlogNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogNewsController],
    }).compile();

    controller = module.get<BlogNewsController>(BlogNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
