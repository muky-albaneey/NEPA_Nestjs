import { Controller,Post,Body, Param,ParseEnumPipe,ConflictException } from '@nestjs/common';
import { BlogNewsService } from './blog_news.service';
import { BlogDto, CommentDto } from './dto/blog.dto';
import { User,usersValid } from 'src/auth/decorators/user.decorator';
import { UserType } from '@prisma/client';

@Controller('blog-news')
export class BlogNewsController {
    constructor(private readonly blog : BlogNewsService){}

    @Post("story/:type")
    bloging(@Body() body : BlogDto, @Param('type', new ParseEnumPipe(UserType)) type : UserType ){
        if(type !== UserType.ADMIN){
            return `${new ConflictException()} ${type}`;
        }
        return `${this.blog.blogNews(body)} ${type}`;
        
    }

    @Post("comment")
    comment(@Body() body : CommentDto){
        return this.blog.commentSection(body)
    }
}
