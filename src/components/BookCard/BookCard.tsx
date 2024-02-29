import { IBook } from "types/book";
import BookImage from "../ui/BookImage/BookImage";
import Panel from "../ui/Panel/Panel";
import LinksArray from "../LinksArray/LinksArray";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";

type Props = {
  book: IBook;
  handleAuthorClick: (author: string) => void;
};

const BookCard = ({ book, handleAuthorClick }: Props) => {
  return (
    <Panel className="rounded-lg hover:scale-105 transition-transform p-3">
      <div className="h-full flex flex-col gap-3 items-center">
        <Link to={"/books/" + book.id} state={book}>
          <BookImage src={book.image} alt={book.title} />
        </Link>
        <div className="h-full w-[250px] flex flex-col justify-between justify-self-end gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center h-10 ">
              <div className="text-center font-bold text-gray-700">
                {book.title}
              </div>
            </div>
            <hr className="border-gray-400" />
            <div className="flex justify-center text-center items-center h-10">
              <span>
                <LinksArray
                  valuesArray={book.author.split(", ")}
                  handleClick={handleAuthorClick}
                />
              </span>
            </div>
            <div className="line-clamp-3 ml-2">{book.shortDescription}</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="pl-3 font-bold text-xl text-red-500">
              ${book.price}
            </div>
            <Link to={"/books/" + book.id} state={book}>
              <Button color="grey">View</Button>
            </Link>
          </div>
          {/*  */}
        </div>
      </div>
    </Panel>
  );
};

export default BookCard;
