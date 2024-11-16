import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRecruiterDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  companyName: string;

  @ApiProperty({ required: false })
  @IsString()
  companyWebsite: string;

  @ApiProperty()
  @IsString()
  contactNumber: string;
}
