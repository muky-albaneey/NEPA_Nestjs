import { Module } from '@nestjs/common';
import { BlogNewsService } from './blog_news.service';
import { BlogNewsController } from './blog_news.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  providers: [BlogNewsService,PrismaService],
  controllers: [BlogNewsController]
})
export class BlogNewsModule {}
