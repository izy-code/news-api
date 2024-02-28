export enum Status {
  OK = 'ok',
  ERROR = 'error',
}

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface ResponseObject {
  status: `${Status}`;
  code?: string;
  message?: string;
}

export interface NewsResponseObject extends ResponseObject {
  articles: Article[];
}

export interface SourcesResponseObject extends ResponseObject {
  sources: Source[];
}


