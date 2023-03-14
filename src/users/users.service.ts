import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        protected readonly userRepository: Repository<User>,
    ){}
    async findAll() {
        return await this.userRepository.find();
    }
    async create(createUserDto: CreateUserDto) {
        const saltOrRounds = 10;
        const salt = await bcrypt.genSalt(saltOrRounds);
        createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
        const { password, ...retrieveUserDto } = await this.userRepository.save(createUserDto);
        return retrieveUserDto;
    }
}
