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

interface Response {
  status: `${Status}`;
  code?: string;
  message?: string;
}

export interface NewsResponse extends Response {
  articles: Article[];
}

export interface SourcesResponse extends Response {
  sources: Source[];
}
