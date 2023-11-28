import Image from "next/image";
import Link from "next/link";

import styles from "@/sass/layouts/logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/Group.png"
          alt="vnv"
          width="31"
          height="18"
          priority={true}
        />
        <span className={styles.logo__chip}>ecosolution</span>
        <div className={`${styles.chipContainer} `}>
          <span className={styles.logo__color}>GREEN</span>ERGY
          <span className={styles.forLife}> FOR LIFE</span>
        </div>
      </div>
    </Link>
  );
};
export default Logo;
