export interface TableData<T> {
  data: T[];
  limit?: number;
  offset?: number;
  count: number;
}
