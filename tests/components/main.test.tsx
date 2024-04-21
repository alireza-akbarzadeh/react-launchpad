import { describe, expect, it } from 'vitest';

describe('isRouteErrorResponse', () => {
  it('sgnals error response', () => {
    const valuse = { name: 'mosh' };
    expect(valuse).toEqual({ name: 'mosh' });
  });
});
