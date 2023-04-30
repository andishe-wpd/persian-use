import {useFinglishToPersian} from '..';

describe('useFinglishToPersian', () => {
  it('converts Finglish to Persian', () => {
    const finglishText = 'aabadi zhale';
    const expectedPersianText = 'آبادی ژاله';
    const persianText = useFinglishToPersian(finglishText);
    expect(persianText).toEqual(expectedPersianText);
  });

  it('returns the same text if it contains no Finglish characters', () => {
    const nonFinglishText = 'این یک متن فارسی است';
    const expectedPersianText = nonFinglishText;
    const persianText = useFinglishToPersian(nonFinglishText);
    expect(persianText).toEqual(expectedPersianText);
  });

  it('handles mixed Finglish and Persian text', () => {
    const mixedText = 'آبادی zhale';
    const expectedPersianText = 'آبادی ژاله';
    const persianText = useFinglishToPersian(mixedText);
    expect(persianText).toEqual(expectedPersianText);
  });
});
