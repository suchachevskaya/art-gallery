import { DEFAULT_IMAGE_PLACEHOLDER } from "@/constants/placeholders";

const BASE_IMG_URL = 'https://www.artic.edu/iiif/2';

export function createImgSource(
  imageId: string | null | undefined,
  width: number = 600,
): string {
  if (!imageId) {
    return DEFAULT_IMAGE_PLACEHOLDER;
  }

  return `${BASE_IMG_URL}/${imageId}/full/${width},/0/default.jpg`;
}
