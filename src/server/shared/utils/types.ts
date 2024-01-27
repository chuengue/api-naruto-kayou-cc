export interface ContentError{
  code: number;
  message: string;
}
export interface ErrorMessage {
  [key: string]: ContentError[]
}


export interface PathHandleResult {
  archiveName: string;
  errorList: string;
}
export  interface ListResult {
    totalItems: number
    itemsPerPage: number
    page: number
    results: unknown[],

}