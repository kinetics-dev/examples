import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { kineticsConfig } from "./kinetics.config";
import { KineticsStrategy } from "./kinetics.strategy";

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      load: [kineticsConfig],
    }),
  ],
  providers: [KineticsStrategy],
})
export class AuthModule {}
