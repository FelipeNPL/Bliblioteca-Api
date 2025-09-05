import { IBook } from '../interfaces/Ibook.js';

export class Book implements IBook {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isbn: string,
    public publicationYear: number
  ) {}
}