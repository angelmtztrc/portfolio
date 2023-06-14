import { IImage } from '@interfaces/image';

export const getImagePath = (image: IImage) => {
  return image.data.attributes.url;
};
