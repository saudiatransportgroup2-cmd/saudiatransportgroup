import Image from "next/image";
import { Camera } from "lucide-react";
import { images, type ImageId } from "@/config/images";
import { cx } from "./primitives";

const tones = {
  navy: "from-navy-800 via-navy-900 to-navy-950",
  dark: "from-navy-900 via-navy-950 to-black",
  warm: "from-[#2a3a4f] via-navy-800 to-navy-900",
  light: "from-navy-100 via-[#d7dfe9] to-navy-100",
} as const;

/**
 * Image slot. Renders the real photograph when `src` is set in config/images.ts,
 * otherwise a designed placeholder that holds the layout.
 */
export function Photo({
  id,
  tone = "navy",
  className,
  priority,
  sizes = "100vw",
}: {
  id: ImageId;
  tone?: keyof typeof tones;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const slot = images[id];
  if (slot.src) {
    return (
      <div className={cx("relative overflow-hidden", className)}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  const dark = tone !== "light";
  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={cx("relative isolate overflow-hidden bg-gradient-to-br", tones[tone], className)}
    >
      <svg aria-hidden className="absolute inset-0 -z-10 size-full opacity-[0.07]">
        <defs>
          <pattern id={`p-${id}`} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="28" stroke={dark ? "#fff" : "#10243a"} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${id})`} />
      </svg>
      {/* The slot label only helps while building. It is hidden on the live site. */}
      {process.env.NODE_ENV !== "production" && (
      <span
        className={cx(
          "absolute bottom-3 start-3 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest",
          dark ? "text-white/35" : "text-navy-900/40",
        )}
      >
        <Camera className="size-3" aria-hidden /> {id}
      </span>
      )}
    </div>
  );
}
