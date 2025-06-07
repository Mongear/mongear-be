import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class UserService {
  constructor(private prismaService: PrismaService) { }

  async create() {
  };

  async getUsers() {
    return await this.prismaService.user.findMany();
  }
  async getUserById(userId: string) {
    const result = await this.prismaService.user.findFirst({
      where: {
        id: userId,
      }
    });
    if (!result) {
      throw new HttpException("", HttpStatus.NOT_FOUND);
    }
  }
  async updateUser(userId: string) {
    return await this.prismaService.user.update({
      where: {
        id: userId
      },
      data: {

      }
    })
  }
  async deleteUser(userId: string) {
    return await this.prismaService.user.delete({
      where: {
        id: userId
      }
    })
  }
}
