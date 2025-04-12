import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signUp(data: SignUpDTO) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (userAlreadyExists)
      throw new UnauthorizedException('User already exists');

    const user = await this.prismaService.user.create({ data });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async signIn(data: SignInDTO) {
    console.log(data);

    return 'wfwfwfew';
  }
}
