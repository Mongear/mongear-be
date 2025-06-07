import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRequest, SignUpRequest } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() request: AuthRequest) {
    this.authService.login(request);
  }

  @Post('signup')
  async signUp(@Body() request: SignUpRequest) {
    return await this.authService.signUp(request);
  }
}

