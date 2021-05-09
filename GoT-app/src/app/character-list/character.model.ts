export class Character {
  public aliases: string[];
  public name: string;
  public culture: string;
  public born: string;
  public died: string;
  public gender: string;
  public titles: string[];
  public father: string;
  public mother: string;
  public spouse: string;
  public allegiances: string[];
  public books: string[];
  public tvSeries: string[];
  public playedBy: string[];


  constructor(aliases: string [], name: string, culture: string, born: string, died: string, gender: string, titles: string[], father: string, mother: string,
              spouse: string, allegiances: string[], books: string[], tvSeries: string[], playedBy: string[]) {
    this.aliases = aliases;
    this.name = name;
    this.culture = culture;
    this.born = born;
    this.died = died;
    this.gender = gender;
    this.titles = titles;
    this.father = father;
    this.mother = mother;
    this.spouse = spouse;
    this.allegiances = allegiances;
    this.books = books;
    this.tvSeries = tvSeries;
    this.playedBy = playedBy;
  }
}
