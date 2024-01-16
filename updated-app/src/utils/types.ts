import { Dispatch, SetStateAction } from "react";

export interface IUnivesity {
  name: string;
  alpha_two_code: string;
  domains: string[];
}

export interface IPageInputState {
  currentPage: number;
  valueInput: string;
}
export interface IUniversityState {
  universities: IUnivesity[];
  isLoading: boolean;
  isError: boolean;
}
export interface IPageInputContext {
  PageInput: IPageInputState;
  setPageInput: Dispatch<SetStateAction<IPageInputState>>;
}
export interface IUniversityContext {
  Universities: IUniversityState;
  setUniversities: Dispatch<SetStateAction<IUniversityState>>;
}
