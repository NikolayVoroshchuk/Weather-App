import { getCelciusFromKelvin } from './index';

describe('Tests for temperature helper function', () => {
  it('Should count temperature in a proper way', async () => {
    const result = getCelciusFromKelvin(303);
    expect(result).toBe(30);
  });
});
