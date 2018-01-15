import isRtl from './isRtl';

describe('isRtl', () => {
  test('returns true if theme is rtl', () => {
    expect(isRtl({
      theme: {
        rtl: true
      }
    })).toBe(true);
  });

  test('returns true if theme is ltr', () => {
    expect(isRtl({
      theme: {
        rtl: false
      }
    })).toBe(false);
  });
});

