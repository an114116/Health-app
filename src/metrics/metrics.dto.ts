import { ApiProperty } from '@nestjs/swagger';

export class MetricsDto {
  @ApiProperty({ description: 'User ID associated with the metrics', example: '12345' })
  userId: string;

  @ApiProperty({ description: 'Number of sleep hours per day', example: 7 })
  sleepHours: number;

  @ApiProperty({ description: 'Number of steps walked in a day', example: 10000 })
  steps: number;

  @ApiProperty({ description: 'Water intake in liters per day', example: 2.5 })
  waterIntake: number;
}
