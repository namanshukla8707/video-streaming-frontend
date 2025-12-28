import type { ReactNode } from "react";

type SuspenseRouteProps = {
  element: ReactNode;
};

type BooleanType = {
  [key: string]: boolean;
};

export enum APIRequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type ApiResponse<T> = {
  success: boolean;
  status: string;
  statusCode: number;
  data: T;
  message: string;
  timestamp: string;
  error: string;
};

export type { SuspenseRouteProps, BooleanType };
