type ArticleSource = {
  id: string;
  name: string;
};

export interface Article {
  source: ArticleSource;
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

interface ResponseObject {
  status: 'ok' | 'error';
  code?: string;
  message?: string;
}

export interface NewsResponseObject extends ResponseObject {
  articles: Article[];
}

export interface SourcesResponseObject extends ResponseObject {
  sources: Source[];
}


