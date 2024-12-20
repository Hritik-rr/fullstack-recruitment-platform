import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CandidateService {
  constructor(private prisma: PrismaService) {}

  create(createCandidateDto: CreateCandidateDto) {
    return this.prisma.candidate.create({ data: createCandidateDto });
  }

  findAll() {
    return this.prisma.candidate.findMany({
      where: {
        user: {
          role: 'CANDIDATE', // Filter candidates whose associated user has the role 'CANDIDATE'
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} candidate`;
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
