import { Injectable, ConflictException,NotFoundException} from '@nestjs/common';
import {User, UserType} from "@prisma/client";
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
import { PrismaService } from 'src/prisma/prisma.service';

interface singupParams {
        name  ?: string;
        email ?: string;
        phoneNumber : string;      
        user_type: UserType;        
}


interface signParam{
    phoneNumber : string;
}

interface updateParams {
    name  ?: string;
    email ?: string;
    phoneNumber ?: string;            
}
@Injectable()
export class AuthService {

    constructor (private readonly con : PrismaService){

    }

  async singup(body: singupParams){
        const findUser = await this.con.user.findUnique({
            where :{phoneNumber : body.phoneNumber}
        });

        if(findUser){
            throw new ConflictException();
        }

        const user = await this.con.user.create({
            data :{
                name : body.name,
                email : body.email,
                phoneNumber : body.phoneNumber,
                user_type : body.user_type
            }
        });

        
        // console.log(jsonInfo);
        
    return user;

  }

  async signIn(body : signParam){

    const findUser = await this.con.user.findUnique({
        where :{phoneNumber : body.phoneNumber}
    });


    if(!findUser){
        throw new NotFoundException()
    }
    const json = await this.generateJwt(findUser.phoneNumber,findUser.user_type,findUser.id);
    return json;

  }
    async updateProfile(data : updateParams , id : number){
        const findUser = await this.con.user.findUnique({
            where :{id}
        });

        if(!findUser){
           throw new NotFoundException()
        }

        const updateUser = await this.con.user.update({
           where : {
                id : id
           } ,
           data
        });

        return `${updateUser.email},${updateUser.name},${updateUser.phoneNumber}`
    }

   
    private generateJwt(phone : string, type : UserType, id: number){

        const jsonInfo = {phone, type, id};
        const expires = {expiresIn : 37000};

        const jsonWeb =  jwt.sign(
            jsonInfo,
            process.env.JSON_WEB_TOKEN,
            expires
      );

      return jsonWeb;
    }
}
