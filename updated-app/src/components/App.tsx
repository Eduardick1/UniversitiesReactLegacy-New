import { useEffect } from "react";
import axios from "axios";

import { BASE_URL, ITEMS_PER_PAGE } from "../utils/CONST";
import { usePageInput, useUniversities } from "../utils/context";
import { getDataSlice, getPages } from "../utils/helpers";

import Input from "./input";
import Table from "./Table";
import Pagination from "./Pagination";

export default function App() {
  const { Universities, setUniversities } = useUniversities();
  const { universities, isError, isLoading } = Universities;
  const { PageInput } = usePageInput();

  useEffect(() => {
    const fetchData = async () => {
      setUniversities((prev) => {
        return { ...prev, isLoading: true, isError: false };
      });
      await axios
        .get(BASE_URL + PageInput.valueInput)
        .then((res) => {
          setUniversities((prev) => {
            return { ...prev, isLoading: false, universities: res.data };
          });
        })
        .catch(() => {
          setUniversities((prev) => {
            return { ...prev, isError: true, isLoading: false };
          });
        });
    };
    fetchData();
  }, [PageInput.valueInput]);
  return (
    <main>
      <Input />
      {isError ? (
        <h1>OOPS... Something happend! Try again or later</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : universities.length ? (
        <>
          <Table
            tableData={getDataSlice(
              universities,
              PageInput.currentPage,
              ITEMS_PER_PAGE
            )}
          />
          <Pagination pages={getPages(universities.length)} />
        </>
      ) : (
        <h1>Keep writing ;)</h1>
      )}
    </main>
  );
}
