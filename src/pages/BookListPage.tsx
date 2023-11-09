import React, { useEffect, useState } from "react";
import Search from "../components/ui/Search";
import BookCard from "../components/BookCard";
import { Book } from "../types/book";
import { fakeBooksApi } from "../api/booksApi";
import { useSearchParams } from "react-router-dom";

const BookListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("q") || "");
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getQueryBooks = (query: string) => {
        setIsLoading(true);
        fakeBooksApi.fetchBooks(query).then((fetched_books) => {
            setBooks(fetched_books);
            setIsLoading(false);
        });
    };
    const searchChangeHandle = (query: string) => {
        if (query !== "") setSearchParams({ q: query });
        else setSearchParams({});
        setSearchText(query);
        getQueryBooks(query);
    };
    useEffect(() => {
        getQueryBooks(searchText);
    }, [searchText]);

    return (
        <>
            <div className="mt-2 flex justify-center top-20 w-full mb-6">
                <Search value={searchText} onChange={searchChangeHandle} />
            </div>
            <div className="flex flex-wrap justify-center gap-y-5 gap-x-3 md:gap-x-6">
                {isLoading ? (
                    <>Loading...</>
                ) : books.length === 0 ? (
                    <>Not found...</>
                ) : (
                    books.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            handleAuthorClick={searchChangeHandle}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default BookListPage;
