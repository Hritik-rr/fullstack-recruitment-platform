import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty({ required: false })
  @IsString()
  resume: string;

  @ApiProperty()
  @IsString()
  profile: string;
}
