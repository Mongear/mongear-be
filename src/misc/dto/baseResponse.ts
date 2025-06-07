export class BaseResponse<T> {
  isSuccess: boolean = true;
  status?: number = 200;
  message: string = "";
  value: T | null = null!;
}


