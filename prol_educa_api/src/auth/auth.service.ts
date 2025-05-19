import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private jwtService: JwtService) { }

  public async register(data: RegisterDto) {
    console.log('Registering user:', data);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log('Hashed password:', hashedPassword);
    const user = { ...data, password: hashedPassword, id: Date.now() };
    const existingUser = await this.repository.findOne({ where: { email: data.email } });
    if (existingUser) {
      throw new UnauthorizedException('Email já cadastrado');
    }
    await this.repository.save({
      name: user.name,
      email: user.email, 
      password: user.password
    });
    return { message: 'Usuário registrado com sucesso' };
  }

  public async login(data: LoginDto) {
    const user = await this.repository.findOne({ where: { email: data.email } });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async getAllUsers() {
    return await this.repository.find();
  }
}
