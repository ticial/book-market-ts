import { useEffect, useState } from "react";
import BookCard from "components/BookCard/BookCard";
import { IBook } from "types/book";
import {
  LEVEL_FILTER_OPTIONS,
  PRICE_FILTER_OPTIONS,
  fakeBooksApi,
} from "api/booksApi";
import Button from "components/ui/Button/Button";
import BookFilters, { FiltersParams } from "./BookFilters";
import { useSearchParams } from "react-router-dom";

const PAGINATION_LIMIT = 12;

const BookListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersParam, setFiltersParam] = useState<FiltersParams>({
    searchText: searchParams.get("q") || "",
    priceFilter: PRICE_FILTER_OPTIONS.ANY,
    levelFilter: LEVEL_FILTER_OPTIONS.ANY,
  });
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationOffset, setPaginationOffset] = useState(0);
  const [paginationTotal, setPaginationTotal] = useState(0);

  const updateBooksList = (
    { searchText, priceFilter, levelFilter }: FiltersParams,
    offset: number = 0
  ) => {
    setIsLoading(true);
    fakeBooksApi
      .fetchBooks(
        searchText,
        priceFilter,
        levelFilter,
        offset,
        PAGINATION_LIMIT
      )
      .then(({ results, total }) => {
        if (offset === 0) setBooks(results);
        else setBooks([...books, ...results]);
        setPaginationOffset(offset);
        setPaginationTotal(total);
        setIsLoading(false);
      });
  };

  const searchChangeHandle = (value: string) => {
    handleFiltersChange({ ...filtersParam, searchText: value });
  };

  const handleFiltersChange = (params: FiltersParams) => {
    setSearchParams({
      q: params.searchText,
      p: params.priceFilter,
      l: params.levelFilter,
    });
    setFiltersParam(params);
    updateBooksList(params);
  };

  const paginationHandle = () => {
    const offset = paginationOffset + PAGINATION_LIMIT;
    updateBooksList(filtersParam, offset);
  };

  useEffect(() => {
    updateBooksList(filtersParam);
  }, []);

  const isPaginationActive =
    paginationTotal > paginationOffset + PAGINATION_LIMIT;

  return (
    <>
      <BookFilters params={filtersParam} onChange={handleFiltersChange} />
      {!isLoading && books.length === 0 ? (
        <>Not found...</>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-y-5 gap-x-3 md:gap-x-6 mb-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                handleAuthorClick={searchChangeHandle}
              />
            ))}
          </div>
          {isLoading ? (
            <>Loading...</>
          ) : (
            isPaginationActive && (
              <Button onClick={paginationHandle}>Show more</Button>
            )
          )}
        </>
      )}
    </>
  );
};

export default BookListPage;
