import { DEFAULT_IMAGE_PLACEHOLDER } from '@/constants/placeholders';
import { createImgSource } from '@/utils/createImgSource';
import { describe, expect, it } from 'vitest';

describe('createImgSource', () => {
  it('return DEFAULT_IMAGE_PLACEHOLDER if image is missing', () => {
    const missingImageIds = [undefined, null, ''];

    missingImageIds.forEach((imageId) => {
      expect(createImgSource(imageId)).toBe(DEFAULT_IMAGE_PLACEHOLDER);
    });
  });
  it('return URL if imageId and width are passed', () => {
    const imageId = 'testImage';
    const width = 800;
    const result = createImgSource(imageId, width);
    const expected = `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`;

    expect(result).toBe(expected);
  });
});
