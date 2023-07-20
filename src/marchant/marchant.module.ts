import { Module } from '@nestjs/common';
import { MarchantService } from './marchant.service';
import { MarchantController } from './marchant.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  providers: [MarchantService,PrismaService],
  controllers: [MarchantController]
})
export class MarchantModule {}
