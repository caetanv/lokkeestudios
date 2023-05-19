import type { Image } from '@/lib/get-projects';
import { generateImageSizeProps } from '@/lib/sanity-image';
import { HTMLAttributes, forwardRef } from 'react';

interface SanityImageProps extends HTMLAttributes<HTMLImageElement> {
  image: Image;
  sizes?: string;
  isAboveTheFold?: boolean;
}

const SanityImage = forwardRef<HTMLImageElement, SanityImageProps>(
  ({ image, sizes = undefined, isAboveTheFold = false, ...props }, ref) => (
    <img
      style={{
        backgroundColor: image.metadata.palette.dominant.background,
      }}
      alt={image.alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding={isAboveTheFold ? 'sync' : 'async'}
      {...generateImageSizeProps({ image, sizes })}
      ref={ref}
      {...props}
    />
  ),
);
SanityImage.displayName = 'SanityImage';

export default SanityImage;
