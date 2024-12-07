import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthProfileModule } from './healthProfile/healthProfile.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [UserModule, HealthProfileModule, MetricsModule],
})
export class AppModule {}
