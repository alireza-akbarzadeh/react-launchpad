import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('isRouteErrorResponse', () => {
  it('sgnals error response', () => {
    const valuse = { name: 'mosh' };
    const button = screen.findByRole('button');

    expect(valuse).toEqual({ name: 'mosh' });
  });
});
