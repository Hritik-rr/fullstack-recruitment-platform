import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService],
  imports: [PrismaModule],
})
export class CandidateModule {}
