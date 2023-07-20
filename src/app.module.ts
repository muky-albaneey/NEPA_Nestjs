import { Module,ClassSerializerInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BlogNewsModule } from './blog_news/blog_news.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MarchantModule } from './marchant/marchant.module';
import { UserInterceptor } from './auth/interceptor/users.interceptor';


@Module({
  
  controllers: [AppController],
  providers: [AppService,{
    provide : APP_INTERCEPTOR,
    useClass : UserInterceptor
  }],
  imports: [PrismaModule, AuthModule, BlogNewsModule, MarchantModule]
})
export class AppModule {}
