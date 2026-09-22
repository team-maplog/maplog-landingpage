import Image from "next/image";

type AppScreenshotProps = {
  name: "reel" | "editor" | "route" | "explore" | "playback" | "events" | "home" | "event-detail" | "comments";
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function AppScreenshot({ name, alt, sizes, priority = false }: AppScreenshotProps) {
  return (
    <Image
      className="app-screenshot"
      src={`/screenshots/${name}.webp`}
      alt={alt}
      width={828}
      height={name === "reel" ? 1800 : 1792}
      sizes={sizes}
      priority={priority}
    />
  );
}
