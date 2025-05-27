import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  public async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

  @Post('login')
  public async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @Get('users')
  @UseGuards(JwtAuthGuard)
  public async findAll() {
    return await this.authService.getAllUsers();
  }
}
