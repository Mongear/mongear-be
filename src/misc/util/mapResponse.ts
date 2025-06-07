import { Response } from "express";
import { BaseResponse } from "../dto/baseResponse";

export const mapOkResponse = <T>(
  value: T | null = null,
  message: string = ""
): BaseResponse<T> => {
  return {
    isSuccess: true,
    message: message,
    value: value,
    status: 200,
  }
}

export const mapCreatedResponse = <T>(
  value: T | null = null,
  message: string = ""
): BaseResponse<T> => {
  return {
    isSuccess: true,
    message: message,
    value: value,
    status: 201,
  }
}

export const mapBadRequestResponse = <T>(
  message: string = "",
  value: T | null = null,
): BaseResponse<T> => {
  return {
    isSuccess: false,
    message: message,
    value: value,
    status: 400,
  }
}

export const mapNotFoundResponse = <T>(
  message: string = "",
  value: T | null = null,
): BaseResponse<T> => {
  return {
    isSuccess: false,
    message: message,
    value: value,
    status: 404,
  }
}


export const mapEndpointResponse = <T>(res: Response, result: BaseResponse<T>) => {
  const { status, ...response } = result;
  return res.status(result.status ?? 200).json(response);
}
