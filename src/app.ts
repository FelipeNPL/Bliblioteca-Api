import { BookService } from './services/BookService';

// Exemplo de uso
const newBook = BookService.createBook({
  title: "Dom Casmurro",
  author: "Machado de Assis",
  isbn: "978-8544001820",
  publicationYear: 1899
});

console.log('Livro criado:', newBook);
console.log('Todos os livros:', BookService.getAllBooks());