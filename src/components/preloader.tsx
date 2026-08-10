import Image from "next/image";
import { LOGO } from "@/lib/site";

/**
 * Brand preloader — deliberately zero JavaScript.
 *
 * It is a server-rendered overlay driven entirely by CSS keyframes (see
 * `.preloader` in globals.css), so it paints on the first frame and dismisses
 * itself on a fixed timer. Nothing here can hang waiting on a script, and it
 * still clears correctly if JS never loads at all.
 *
 * Hidden outright for `prefers-reduced-motion: reduce`.
 */
export function Preloader() {
  return (
    <div className="preloader" aria-hidden>
      <Image
        src={LOGO.src}
        alt=""
        width={LOGO.width}
        height={LOGO.height}
        quality={90}
        priority
        // Sized by width, not height: the lockup is ~3:1, so a height-based
        // utility large enough to read on desktop overflows a phone screen.
        className="preloader-mark h-auto w-[min(78vw,32rem)]"
      />
      <span className="preloader-bar" />
    </div>
  );
}
