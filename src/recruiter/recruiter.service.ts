import { Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecruiterService {
  constructor(private prisma: PrismaService) {}

  create(createRecruiterDto: CreateRecruiterDto) {
    return this.prisma.recruiter.create({ data: createRecruiterDto });
  }

  findAll() {
    return this.prisma.recruiter.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} recruiter`;
  }

  update(id: number, updateRecruiterDto: UpdateRecruiterDto) {
    return `This action updates a #${id} recruiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} recruiter`;
  }
}
