import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


interface blog{
    story : string
}

interface comment {
        usersComment : string
        user_id : number
        blog_id : number
}
@Injectable()
export class BlogNewsService {

    constructor(private readonly con : PrismaService){}

    async blogNews({story} : blog, ){
        
        const blogs = await this.con.blog.create({
            data :{
               story
            }
        });

        return blogs;
    }

    async commentSection(body : comment){

        const blogId = await this.getBlogId(body.blog_id)
        const comment = await this.con.comment.create({
            data :{ 

                usersComment : body.usersComment,
                user_id  : body.user_id,                
                blog_id : blogId.id      

            }   
        });

        return comment;
    }

    async getBlogId(id : number){

        const findBlogNews = await this.con.blog.findUnique({
            select : {
                id : true,
                story  : true,
                comment : true,
                created_at : true,
                updated_at : true,
            },
            where : {
                id : id
            }
        });

        return findBlogNews;
    }

}
