import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        protected readonly userRepository: Repository<User>,
    ){}
    async findAll() {
        return await this.userRepository.find();
    }
    async create(createUserDto) {
        return await this.userRepository.save(createUserDto);
    }
}
