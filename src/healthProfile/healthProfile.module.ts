import { Module } from '@nestjs/common';
import { HealthProfileController } from './healthProfile.controller';

@Module({
  controllers: [HealthProfileController],
})
export class HealthProfileModule {}
