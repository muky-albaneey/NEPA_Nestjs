import { Test, TestingModule } from '@nestjs/testing';
import { BlogNewsService } from './blog_news.service';

describe('BlogNewsService', () => {
  let service: BlogNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogNewsService],
    }).compile();

    service = module.get<BlogNewsService>(BlogNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
