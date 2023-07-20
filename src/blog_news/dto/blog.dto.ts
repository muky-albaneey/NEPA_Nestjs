import {IsString,IsNotEmpty, IsNumber} from "class-validator";


export class BlogDto {


    @IsString()
    @IsNotEmpty()
    story : string
    
}


export class CommentDto {

    @IsString()
    @IsNotEmpty()
    usersComment : string

    @IsNumber()
    @IsNotEmpty()
    user_id : number

    @IsNumber()
    @IsNotEmpty()
    blog_id : number
}