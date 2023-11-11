import React, { useEffect, useState } from "react";
import Search from "../components/ui/Search";
import BookCard from "../components/BookCard";
import { Book } from "../types/book";
import {
    LEVEL_FILTER_OPTIONS,
    PRICE_FILTER_OPTIONS,
    fakeBooksApi,
} from "../api/booksApi";
import { useSearchParams } from "react-router-dom";
import Select, { Option } from "../components/ui/Select";

const PRICE_OPTIONS: Option[] = [
    { key: PRICE_FILTER_OPTIONS.ANY, value: "Any Price" },
    { key: PRICE_FILTER_OPTIONS.LESS15, value: "Up to $15" },
    { key: PRICE_FILTER_OPTIONS.BTW15AND30, value: "$15 - $30" },
    { key: PRICE_FILTER_OPTIONS.GREATER30, value: "$30+" },
];

const LEVEL_OPTIONS: Option[] = [
    { key: LEVEL_FILTER_OPTIONS.ANY, value: "Any Level" },
    { key: LEVEL_FILTER_OPTIONS.BEGINNER, value: "Beginner" },
    { key: LEVEL_FILTER_OPTIONS.MIDDLE, value: "Middle" },
    { key: LEVEL_FILTER_OPTIONS.PRO, value: "Pro" },
];

const BookListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("q") || "");
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [priceFilter, setPriceFilter] = useState(PRICE_FILTER_OPTIONS.ANY);
    const [levelFilter, setLevelFilter] = useState(LEVEL_FILTER_OPTIONS.ANY);
    const updateBooksList = (
        query: string,
        priceFilter: number,
        levelFilter: number
    ) => {
        setIsLoading(true);
        fakeBooksApi
            .fetchBooks(query, priceFilter, levelFilter)
            .then((fetched_books) => {
                setBooks(fetched_books);
                setIsLoading(false);
            });
    };
    const searchChangeHandle = (query: string) => {
        setSearchText(query);
    };
    useEffect(() => {
        const params = {} as any;
        if (searchText !== "") params.q = searchText;
        if (priceFilter !== PRICE_FILTER_OPTIONS.ANY)
            params.p = PRICE_FILTER_OPTIONS[priceFilter].toLowerCase();
        if (levelFilter !== LEVEL_FILTER_OPTIONS.ANY)
            params.l = LEVEL_FILTER_OPTIONS[levelFilter].toLowerCase();
        setSearchParams(params);
        updateBooksList(searchText, priceFilter, levelFilter);
    }, [searchText, priceFilter, levelFilter, setSearchParams]);

    return (
        <>
            <div className="mt-2 flex flex-col justify-center items-center gap-6 top-20 w-full mb-6">
                <div className="md:hidden flex justify-center w-full max-w-lg">
                    <Search value={searchText} onChange={searchChangeHandle} />
                </div>
                <div className="flex justify-center items-center w-full gap-6">
                    <Select
                        selectedKey={priceFilter}
                        options={PRICE_OPTIONS}
                        onSelect={(key) => setPriceFilter(key)}
                    />
                    <div className="hidden md:flex w-full max-w-lg">
                        <Search
                            value={searchText}
                            onChange={searchChangeHandle}
                        />
                    </div>

                    <Select
                        selectedKey={levelFilter}
                        options={LEVEL_OPTIONS}
                        onSelect={(key) => setLevelFilter(key)}
                    />
                </div>
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
