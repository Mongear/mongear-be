import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRequest, SignUpRequest } from "./dto";
import { mapBadRequestResponse, mapOkResponse } from "src/misc/util/mapResponse";

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) { }
  login(request: AuthRequest) {
  }

  async signUp(request: SignUpRequest) {
    // create the object
    try {
      const result = await this.prismaService.user.create({
        data: {
          firstName: request.name,
          lastName: request.name,
          email: request.email,
          phoneNumber: request.phoneNumber,
          passwordHash: request.password,
          address: request.address ?? "",
          roleId: "",
        }
      });
      return mapOkResponse({
        result
      }, "Create User Successfully !");
    } catch (e: any) {
      return mapBadRequestResponse("Failed !");
    }
  }
}
