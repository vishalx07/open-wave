import Image, { ImageProps } from "next/image";

type Props = Partial<ImageProps>;

export const DummyLogo = ({ src, alt, ...props }: Props) => {
  return (
    <Image
      src={src ?? "/images/logo2.svg"}
      alt={alt ?? ""}
      width={50}
      height={50}
      {...props}
    />
  );
};
