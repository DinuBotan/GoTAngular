export class House {
  public name: string;
  public region: string;
  public coatOfArms: string;
  public words: string;
  public titles: string[];
  public seats: string[];
  public currentLord: string;
  public heir: string;
  public overlord: string;
  public founded: string;
  public founder: string;
  public diedOut: string;
  public ancestralWeapons: string[];
  public cadetBranches: string[];
  public swornMembers: string[];

  constructor(name: string, region: string, coatOfArms: string, words: string, titles: string[], seats: string[], currentLord: string,
              heir: string, overlord: string, founded: string, founder: string, diedOut: string, ancestralWeapons: string[],
              cadetBranches: string[], swornMembers: string[]) {
    this.name = name;
    this.region = region;
    this.coatOfArms = coatOfArms;
    this.words = words;
    this.titles = titles;
    this.seats = seats;
    this.currentLord = currentLord;
    this.heir = heir;
    this.overlord = overlord;
    this.founded = founded;
    this.founder = founded;
    this.diedOut = diedOut;
    this.ancestralWeapons = ancestralWeapons;
    this.cadetBranches = cadetBranches;
    this.swornMembers = swornMembers;
  }
}
