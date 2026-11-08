import Image from "next/image";
import { HORIZON_CREDIT, HORIZON_CREDIT_LABEL, HORIZON_PHOTO } from "./horizon";
import styles from "./services.module.css";

// The horizon strip opens the workshop page.
export default function HorizonPhoto({ priority = false }: { priority?: boolean }) {
  return (
    <div className={styles.horizonPhoto}>
      <Image src={HORIZON_PHOTO} alt="Storm clouds building over open Oklahoma prairie" fill priority={priority} sizes="100vw" />
      <a className={styles.photoCredit} href={HORIZON_CREDIT}>{HORIZON_CREDIT_LABEL}</a>
    </div>
  );
}
