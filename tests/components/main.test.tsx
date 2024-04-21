import { describe, expect, it } from 'vitest';

describe('isRouteErrorResponse', () => {
  it('signal error response', async () => {
    const valuse = { name: 'mosh' };

    expect(valuse).toEqual({ name: 'mosh' });
  });
});
