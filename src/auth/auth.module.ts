import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import {PrismaService} from "src/prisma/prisma.service"

@Module({
  imports : [PrismaModule],
  providers: [AuthService, PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
 