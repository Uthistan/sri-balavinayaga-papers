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
        className="preloader-mark h-28 w-auto sm:h-40"
      />
      <span className="preloader-bar" />
    </div>
  );
}
