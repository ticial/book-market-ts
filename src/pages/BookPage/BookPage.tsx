import { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IBook } from "types/book";
import { fakeBooksApi } from "api/booksApi";
import CartItemForm from "components/CartItemForm/CartItemForm";
import BookImage from "components/ui/BookImage/BookImage";
import LinksArray from "components/LinksArray/LinksArray";
import ErrorPage from "../ErrorPage/ErrorPage";
import Panel from "components/ui/Panel/Panel";

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { bookId } = useParams();
  const [book, setBook] = useState<IBook | undefined>(location.state);
  const [isLoading, setIsLoading] = useState(!book);

  useEffect(() => {
    if (!book) {
      setIsLoading(true);
      fakeBooksApi.fetchBookById(Number(bookId)).then((fetched_book) => {
        setBook(fetched_book);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSetQuery = (query: string) => {
    navigate({
      pathname: "/books",
      search: createSearchParams({
        q: query,
      }).toString(),
    });
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!book) {
    return <ErrorPage />;
  }
  return (
    <div className="container flex gap-4 flex-wrap justify-center ">
      <Panel
        direction="row"
        className="gap-4 flex-wrap flex-1 justify-center md:justify-stretch p-4 rounded-xl">
        <div className="flex flex-1 justify-center">
          <BookImage src={book.image} alt={book.title} />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="h-full w-full flex flex-col justify-between justify-self-end gap-4">
            <div className="flex flex-col h-full justify-between gap-4 ">
              <div className="flex flex-col justify-start gap-4 ">
                <h1 className="flex justify-center text-center font-bold text-gray-700 items-center text-3xl mt-4">
                  {book.title}
                </h1>
                <hr className="border-gray-400" />
                <div className="flex flex-col gap-4 ml-4">
                  <div>
                    <span className="font-medium text-gray-800">
                      {book.author.includes(",") ? "Authors" : "Author"}
                      :&nbsp;
                    </span>
                    <span>
                      <LinksArray
                        valuesArray={book.author.split(", ")}
                        handleClick={handleSetQuery}
                      />
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">
                      Book level:&nbsp;
                    </span>
                    <span>{book.level}</span>
                  </div>
                  <div>
                    <span className="font-medium">Tags:&nbsp;</span>
                    <span>
                      <LinksArray
                        valuesArray={book.tags}
                        handleClick={handleSetQuery}
                      />
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Amount:&nbsp;</span>
                    <span>{book.amount}</span>
                  </div>
                </div>
              </div>
              <div className="xl:hidden rounded-lg border border-gray-400 bg-white/50 p-4">
                <CartItemForm book={book} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 indent-8 leading-8 bg-white rounded-lg border border-gray-300">
          {book.description}
        </div>
      </Panel>
      <div className="hidden xl:flex w-96 h-fit p-4 flex-col rounded-lg border border-gray-300 bg-white/50 shadow-lg">
        <CartItemForm book={book} />
      </div>
    </div>
  );
};

export default BookPage;
