export class AuthRequest {
  email: string;
  password: string;
}

export class SignUpRequest {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?: string;
}
