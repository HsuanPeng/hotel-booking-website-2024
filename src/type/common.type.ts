export enum EApiStatus {
  SUCCESS = 200,
}

export type TApiResponse<T> = Promise<{
  status: EApiStatus;
  data: {
    status: boolean;
    result: T;
  };
}>;
