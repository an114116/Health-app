import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'Unique identifier for the user', example: '12345' })
  id: string;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'Email address of the user', example: 'john@example.com' })
  email: string;

  @ApiProperty({ description: 'Phone number of the user', example: '+1234567890' })
  phone: string;
}
