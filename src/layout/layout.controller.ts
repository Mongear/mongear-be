import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { createLayoutRequest } from './dto/create.request';
import { Response } from 'express';
import { mapEndpointResponse } from 'src/misc/util/mapResponse';

@Controller('layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) { }

  @Post()
  async create(@Res() res: Response, @Body() request: createLayoutRequest) {
    const result = await this.layoutService.create(request);
    return mapEndpointResponse(res, result);
  }

  @Get()
  async getAll(
    @Res() res: Response,
    @Query('index') index?: string,
    @Query('size') size?: string,
    @Query('keyword') keyword?: string,
  ) {
    const result = await this.layoutService.getAll({
      index: parseInt(index || "1"),
      size: parseInt(size || "10"),
      keyword: "",
    });
    return mapEndpointResponse(res, result);
  }
}
