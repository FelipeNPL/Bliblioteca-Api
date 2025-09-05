import { Book } from '../entities/Book';
import { IBook } from '../interfaces/Ibook';

export namespace BookService {
  let books: Book[] = [];
  let currentId = 1;

  export const getAllBooks = (): IBook[] => books;

  export const getBookById = (id: number): IBook | undefined =>
    books.find(book => book.id === id);

  export const createBook = (bookData: Omit<IBook, 'id'>): IBook => {
    const newBook = new Book(
      currentId++,
      bookData.title,
      bookData.author,
      bookData.isbn,
      bookData.publicationYear
    );
    books.push(newBook);
    return newBook;
  };

  export const updateBook = (id: number, bookData: Partial<IBook>): IBook | null => {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;

    books[bookIndex] = { ...books[bookIndex], ...bookData };
    return books[bookIndex];
  };

  export const deleteBook = (id: number): boolean => {
    const initialLength = books.length;
    books = books.filter(book => book.id !== id);
    return books.length !== initialLength;
  };
}