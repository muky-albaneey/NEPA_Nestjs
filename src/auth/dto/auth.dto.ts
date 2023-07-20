import { UserType } from "@prisma/client";
import { Exclude } from "class-transformer";
import {IsNumber,IsString,IsNotEmpty,IsEmail,Matches,IsOptional, IsEnum} from "class-validator";


export class AuthDto{

        @IsString()
        @IsNotEmpty()
        @IsOptional()
        name?:  string;

        @IsEmail()
        @IsString()
        @IsNotEmpty()
        @IsOptional()
        email?:  string;

        // @Matches("/^((\+)33|0)[1-9](\d{2}){4}$/")
        @IsString()
        phoneNumber:  string;

        @IsEnum(UserType, {message : "Please provide a valid key"})
        user_type: UserType
        

        
        @IsString()
        @IsNotEmpty()
        @IsOptional()
        comment?:  string;


}

export class SignInDto{
    @IsString()
        @IsNotEmpty()
        
    phoneNumber : string;
}


export class UpdtaeDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name  ?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    email ?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    phoneNumber ?: string;   

    @Exclude()
    user_type : UserType
}
