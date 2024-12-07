import { ApiProperty } from '@nestjs/swagger';

export class HealthProfileDto {
  @ApiProperty({ description: 'User ID associated with the health profile', example: '12345' })
  userId: string;

  @ApiProperty({ description: 'Weight of the user in kilograms', example: 70.5 })
  weight: number;

  @ApiProperty({ description: 'Height of the user in centimeters', example: 175 })
  height: number;

  @ApiProperty({ description: 'Age of the user', example: 30 })
  age: number;
}
