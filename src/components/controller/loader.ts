import type { ResponseObject } from '@/types';

enum Status {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

class Loader {
  private baseLink: typeof process.env.API_URL;
  private options: Record<string, string>;

  constructor(baseLink: string, options: Record<string, string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: { endpoint: string; options?: Record<string, string> },
    callback: (data: ResponseObject) => void = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === +Status.UNAUTHORIZED || res.status === +Status.NOT_FOUND) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }

      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Record<string, string>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(
    method: string,
    endpoint: string,
    callback: (data: ResponseObject) => void,
    options: Record<string, string> = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data: ResponseObject) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
