import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { INITIAL_COUNTRY } from "./CONST";
import type {
  IUniversityContext,
  IUniversityState,
  IPageInputContext,
  IPageInputState,
} from "./types";

// _____________________________

const UniversitiesContext = createContext<IUniversityContext | null>(null);

function UniversitiesProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [Universities, setUniversities] = useState<IUniversityState>({
    universities: [],
    isLoading: false,
    isError: false,
  });
  return (
    <UniversitiesContext.Provider value={{ Universities, setUniversities }}>
      {children}
    </UniversitiesContext.Provider>
  );
}

export function useUniversities() {
  const context = useContext(UniversitiesContext);
  if (!context) {
    throw new Error("You can use context only inside University Provider");
  }
  return context;
}

// ______________________________________

const PageInputContext = createContext<IPageInputContext | null>(null);

function PageInputProvider({ children }: { children: ReactNode }): JSX.Element {
  const [PageInput, setPageInput] = useState<IPageInputState>({
    currentPage: 1,
    valueInput: INITIAL_COUNTRY,
  });
  return (
    <PageInputContext.Provider value={{ PageInput, setPageInput }}>
      {children}
    </PageInputContext.Provider>
  );
}

export function usePageInput() {
  const context = useContext(PageInputContext);
  if (!context) {
    throw new Error("You can use context only inside Pagination Provider");
  }
  return context;
}

// _____________________________________________________________________

export default function MasterContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <UniversitiesProvider>
      <PageInputProvider>{children}</PageInputProvider>
    </UniversitiesProvider>
  );
}
