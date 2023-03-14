import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginPayLoadDto } from 'src/users/dto/login-payload.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        protected readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    async validateUser(login: string, password: string) {
        const user = await this.usersService.findOne(login);
        if (await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginPayloadDto: LoginPayLoadDto) {
        const payload = { username: loginPayloadDto.login, sub: loginPayloadDto.id };
        return {
        access_token: this.jwtService.sign(payload),
        };
    }
}
