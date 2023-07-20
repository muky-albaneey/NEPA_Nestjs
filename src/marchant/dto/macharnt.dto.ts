import {IsString,IsNotEmpty, IsNumber} from "class-validator";

export class MarchanttDto {

  


    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    state : string

    @IsString()
    @IsNotEmpty()
    email : string

    @IsString()
    @IsNotEmpty()
    reason : string
}