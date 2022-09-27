declare namespace image {
  type UserImageSize = 160 | 240 | 320 | 480;
  type HostImageSize = 280 | 360 | 540 | 800;

  type ImageSize = UserImageSize | HostImageSize;

  type ImageType<T extends ImageSize> = `${T}w` | "fallback";

  type UserImageType = Record<Readonly<ImageType<UserImageSize>>, string>;

  type HostImageType = Record<Readonly<ImageType<HostImageSize>>, string>;
}

export = image;
