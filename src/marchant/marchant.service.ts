import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface marchantParams {
    name : string;    
    phoneNumber : string;          
    state : string;
    email: string;
    reason : string;
}

@Injectable()
export class MarchantService {

    constructor(private readonly con : PrismaService){}

  async marcharnting(body : marchantParams){
    
    const marchants = await this.con.marchant.create({
        data :{
            name : body.name,            
            phoneNumber : body.phoneNumber,
            state : body.state,
            email : body.email,
            reason : body.reason
            
        }
    });

    return marchants;
   }
}
