export class Book {
  public name: string;
  public url: string;
  public isbn: string;
  public authors: string[];
  public numberOfPages: number;
  public publisher: string;
  public country: string;
  public mediaType: string;
  public released: string;
  public characters: string[];
  public povCharacters: string[];

  constructor(name: string, url: string, isbn: string, authors: string[], numberOfPages: number, publisher: string, country: string,
              mediaType: string, released: string, characters: string[], povCharacters: string[]) {
    this.name = name;
    this.url = url;
    this.isbn = isbn;
    this.authors = authors;
    this.numberOfPages = numberOfPages;
    this.publisher = publisher;
    this.country = country;
    this.mediaType = mediaType;
    this.released = released;
    this.characters = characters;
    this.povCharacters = povCharacters;
  }
}
