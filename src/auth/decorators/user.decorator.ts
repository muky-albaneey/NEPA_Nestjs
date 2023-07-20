import {createParamDecorator,ExecutionContext} from "@nestjs/common";
import { UserType } from "@prisma/client";

export interface usersValid { phoneNumber: string, user_type: UserType, iat:number, exp: number };

export const User = createParamDecorator((dat, context : ExecutionContext,)=>{
    const request = context.switchToHttp().getRequest();

    return request.user
})