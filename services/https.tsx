enum HttpMethods {
  Get = 'GET',
}

export enum Paths {
  Search = '/search.php',
}

//TODO: Move to a env
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export type ApiResponse<T> = T | T[];

export async function get<T>(path: string): Promise<ApiResponse<T>> {
  const localOptions = {
    method: HttpMethods.Get,
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL + path, localOptions);
  return handleResponse(res);
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: Error & { code: number; message: string } = {
      ...new Error('An error occurred while fetching the data.'),
      code: 500,
      message: 'Falla por parte del servidor',
    };
    throw error;
  }
  return await response.text().then(text => {
    const data = text && JSON.parse(text);
    return data;
  });
}

function createHeaders(): Headers {
  const headers = new Headers();
  headers.set('Content-Type', ' application/json');
  return headers;
}
