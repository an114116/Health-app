import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 201, description: 'User created successfully', type: UserDto })
  createUser(@Body() userDto: UserDto) {
    return { message: 'User created', data: userDto };
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'userId', schema: { type: 'string' } })
  @ApiResponse({ status: 200, description: 'User information retrieved', type: UserDto })
  getUserById(@Param('userId') userId: string) {
    return { id: userId, name: 'John Doe', email: 'john@example.com', phone: '+1234567890' };
  }
}
