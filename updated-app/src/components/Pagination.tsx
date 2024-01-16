import { usePageInput } from "../utils/context";

export default function Pagination({ pages }: { pages: number[] }) {
  const { PageInput, setPageInput } = usePageInput();
  return (
    <div>
      {pages.map((page) => (
        <button
          style={
            page === PageInput.currentPage ? { backgroundColor: "#76453B" } : {}
          }
          key={page}
          onClick={() =>
            setPageInput((prev) => {
              return { ...prev, currentPage: page };
            })
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
}
