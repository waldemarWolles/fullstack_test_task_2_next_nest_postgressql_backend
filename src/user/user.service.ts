import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findByConditions(dto: AuthUserDto) {
    return this.repository.findOneBy(dto);
  }

  async findAll() {
    const array = await this.repository.findAndCount();

    return array;
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }
}
