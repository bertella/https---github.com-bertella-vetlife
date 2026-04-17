import imageData from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Exportamos los datos directamente para asegurar que no haya problemas de HMR con JSON en Turbopack
export const PlaceHolderImages: ImagePlaceholder[] = imageData.placeholderImages;