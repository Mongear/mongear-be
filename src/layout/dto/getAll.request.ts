import { IsOptional } from "class-validator";

export class getAllRequest {
  @IsOptional()
  index?: number = 1;

  @IsOptional()
  size?: number = 10;

  @IsOptional()
  keyword?: string = "";
}
