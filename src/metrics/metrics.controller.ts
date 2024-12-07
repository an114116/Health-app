import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MetricsDto } from './metrics.dto';

@ApiTags('Metrics')
@Controller('metrics')
export class MetricsController {
  @Get(':userId')
  @ApiOperation({ summary: 'Get metrics data for a user' })
  @ApiParam({ name: 'userId', schema: { type: 'string' } })
  @ApiResponse({ status: 200, description: 'Metrics data retrieved', type: MetricsDto })
  getUserMetrics(@Param('userId') userId: string) {
    return { userId, sleepHours: 7, steps: 10000, waterIntake: 2.5 };
  }
}
