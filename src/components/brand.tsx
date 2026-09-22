import Link from "next/link";
import { useId } from "react";

export function MaplogMark() {
  const filterId = useId();

  return (
    <svg className="maplog-mark" viewBox="84 40 198 270" aria-hidden="true" focusable="false">
      <defs>
        {/* The original logo is lime on white. Removing its blue-channel matte
            keeps the saturated pin/play mark while suppressing the pale backdrop and glow. */}
        <filter id={filterId} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -3 0 1" />
        </filter>
      </defs>
      <image href="/brand/maplog-logo.png" width="366" height="366" filter={`url(#${filterId})`} />
    </svg>
  );
}

export function BrandLink() {
  return (
    <Link className="brand" href="/" aria-label="Maplog 홈">
      <MaplogMark />
      <span>Maplog</span>
    </Link>
  );
}
