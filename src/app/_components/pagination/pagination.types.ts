export interface IPagination {
  itemsPerPage: number;
  activePage: number;
  totalItems: number;
  extraParams?: Record<string, string | number>;
}