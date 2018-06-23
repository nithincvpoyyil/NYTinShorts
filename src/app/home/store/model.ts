export interface Article {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: Date;
  created_date: Date;
  published_date: Date;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Image[];
  short_url: string;
}

export interface Image {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export enum ArticleSections {
  HOME = 'HOME',
  OPINION = 'OPINION',
  WORLD = 'WORLD',
  NATIONAL = 'NATIONAL',
  POLITICS = 'POLITICS',
  UPSHOT = 'UPSHOT',
  NYREGION = 'NYREGION',
  BUSINESS = 'BUSINESS',
  TECHNOLOGY = 'TECHNOLOGY',
  SCIENCE = 'SCIENCE',
  HEALTH = 'HEALTH',
  SPORTS = 'SPORTS',
  ARTS = 'ARTS',
  BOOKS = 'BOOKS',
  MOVIES = 'MOVIES',
  THEATER = 'THEATER',
  SUNDAYREVIEW = 'SUNDAYREVIEW',
  FASHION = 'FASHION',
  TMAGAZINE = 'TMAGAZINE',
  FOOD = 'FOOD',
  TRAVEL = 'TRAVEL',
  MAGAZINE = 'MAGAZINE',
  REALESTATE = 'REALESTATE',
  AUTOMOBILES = 'AUTOMOBILES',
  OBITUARIES = 'OBITUARIES',
  INSIDER = 'INSIDER'
}
