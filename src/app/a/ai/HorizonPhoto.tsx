import Image from "next/image";
import styles from "./services.module.css";

// Raychel Sanner, "Severe thunderstorm over rural Oklahoma" (Unsplash License).
export const HORIZON_PHOTO = "https://images.unsplash.com/photo-1702432665495-38902d6e5633";
export const HORIZON_CREDIT = "https://unsplash.com/photos/nqu5L_xc6bc";

// The horizon strip opens /a/ai and the workshop page and closes /a/ai.
// The closing repeat is decorative, so it skips the alt text and the credit.
export default function HorizonPhoto({ priority = false, decorative = false, className = "" }: { priority?: boolean; decorative?: boolean; className?: string }) {
  return (
    <div className={`${styles.horizonPhoto} ${className}`}>
      <Image src={HORIZON_PHOTO} alt={decorative ? "" : "Storm clouds building over open Oklahoma prairie"} fill priority={priority} sizes="100vw" />
      {!decorative && <a className={styles.photoCredit} href={HORIZON_CREDIT}>Photo: Raychel Sanner / Unsplash</a>}
    </div>
  );
}
