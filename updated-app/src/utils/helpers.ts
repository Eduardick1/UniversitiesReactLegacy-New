import { ITEMS_PER_PAGE } from "./CONST";
import type { IUnivesity } from "./types";

export function getPages(length: number): number[] {
  if (!length) return [];
  const pageNumbers = [];
  const totalPages = Math.ceil(length / ITEMS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}
export function getDataSlice(
  data: IUnivesity[],
  currentPage: number,
  limit: number
): IUnivesity[] {
  const start = limit * (currentPage - 1);
  const end = start + limit;
  const dataSlice = data.slice(start, end);
  return dataSlice;
}
