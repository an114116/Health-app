import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { HealthProfileDto } from './healthProfile.dto';

@ApiTags('HealthProfile')
@Controller('healthProfile')
export class HealthProfileController {
  @Post()
  @ApiOperation({ summary: 'Add health profile data for a user' })
  @ApiBody({ type: HealthProfileDto })
  @ApiResponse({ status: 201, description: 'Health profile created successfully', type: HealthProfileDto })
  addHealthProfile(@Body() profileDto: HealthProfileDto) {
    return { message: 'Health profile created', data: profileDto };
  }
}
