import Link from "next/link";

export function MaplogMark() {
  return (
    <span aria-hidden="true" className="maplog-mark">
      <i />
      <i />
      <i />
    </span>
  );
}

export function BrandLink() {
  return (
    <Link className="brand" href="/" aria-label="Maplog 홈">
      <MaplogMark />
      <span>maplog</span>
    </Link>
  );
}
