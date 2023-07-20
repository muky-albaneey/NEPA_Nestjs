import { Controller,Post,Body } from '@nestjs/common';
import { MarchantService } from './marchant.service';
import { MarchanttDto } from './dto/macharnt.dto';

@Controller('marchant')
export class MarchantController {
    constructor(private readonly marchant : MarchantService) {
        
    }

    @Post()
    marchantAccount(@Body() body : MarchanttDto){
        return this.marchant.marcharnting(body)
    }
}
