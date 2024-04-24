import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('categories', () =>
    HttpResponse.json([
      {
        id: 1,
        name: 'Electronics',
      },
      {
        id: 2,
        name: 'Beauty',
      },
      {
        id: 3,
        name: 'Gardening',
      },
    ])
  ),
];
