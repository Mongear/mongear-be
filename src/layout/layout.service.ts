import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createLayoutRequest } from './dto/create.request';
import { mapCreatedResponse, mapNotFoundResponse, mapOkResponse } from 'src/misc/util/mapResponse';
import { paginatedRequest } from 'src/misc/dto/paginated.request';

@Injectable()
export class LayoutService {
  constructor(private prismaService: PrismaService) { }

  async create(request: createLayoutRequest) {
    const result = await this.prismaService.layout.create({
      data: {
        name: request.name
      },
      select: {
        id: true,
        name: true,
      }
    });
    return mapCreatedResponse(result, "Create layout successfully !");
  }

  async getAll(request: paginatedRequest) {
    const result = await this.prismaService.layout.findMany({
      where: {
        name: {
          contains: request.keyword
        }
      },
      select: {
        name: true,
        createdAt: true
      },
      skip: (request.size * request.index - 1),
      take: request.size,
    });
    return mapOkResponse(result, "Get layout successfully");
  }

  async getById(id: string) {
    const result = await this.prismaService.layout.findFirst({
      where: {
        id: id
      },
      select: {
        name: true,
        createdAt: true
      },
    });
    if (!result) {
      return mapNotFoundResponse("Layout does not exist");
    }
    return mapOkResponse(result, "Get layout succesfully");
  }

