export interface IListPayload<T> {

  // page: number;
  // per_page: number;
  // total: number;
  // total_pages: number;
  data: T[];
}

export interface ISinglePayload<T> {
  
}
export interface IResponse<T> {
  data: T;
  message: string;
  status: number;
}
export interface IResponseError {
  message: string;
  status: number;
}
