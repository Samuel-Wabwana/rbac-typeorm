import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        protected readonly usersService: UsersService,
    ){}

    async validateUser(login: string, password: string) {
        const user = await this.usersService.findOne(login);
        if (await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
