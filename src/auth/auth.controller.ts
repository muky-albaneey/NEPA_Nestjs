import { Controller,Post,Body, Put, Param, ParseIntPipe } from '@nestjs/common';
import { AuthDto,SignInDto, UpdtaeDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { User,usersValid } from 'src/auth/decorators/user.decorator';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth : AuthService){}

    @Post('signup')
    singup(@Body() body : AuthDto){
        return this.auth.singup(body)
        // console.log(user);
    }

    @Post('signing')
    signIn(@Body() body : SignInDto){
        return this.auth.signIn(body)
    }

    @Put(':id')
    updatingaccount(@Body() body : UpdtaeDto, @Param('id', ParseIntPipe) id: number){
        return this.auth.updateProfile(body, id)
    }
}
