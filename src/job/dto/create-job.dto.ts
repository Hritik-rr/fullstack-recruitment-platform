import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateJobDto {
  @ApiProperty()
  @IsString()
  recuiterId: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  salary: string;
}
