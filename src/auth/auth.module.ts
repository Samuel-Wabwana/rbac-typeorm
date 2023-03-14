import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
    secret: process.env.JWT_KEY,
    signOptions: { expiresIn: '3600s'}
  })],
  controllers: [],
  providers: [AuthService, UsersService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
