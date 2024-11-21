import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  create(createApplicationDto: CreateApplicationDto) {
    return this.prisma.application.create({ data: createApplicationDto });
  }

  findAll() {
    return `jdf`;
    // findAll(jobId: string) {
    //   return this.prisma.application.findMany({
    //     where: {
    //       jobId: jobId,
    //     },
    //   });
  }

  findOne(jobId: string) {
    return this.prisma.application.findMany({
      where: {
        jobId: jobId,
      },
    });
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
