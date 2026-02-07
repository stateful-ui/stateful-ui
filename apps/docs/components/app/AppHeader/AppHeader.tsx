import Brand from "@/components/brand/Brand";
import Link from "next/link";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={`${styles.AppHeader} container-padded`}>
      <div className={styles.Wrapper}>
        <Brand as={Link} href="/" size="medium" />
        <nav className={styles.Navigation}>
          <ul>
            <li>
              <Link href="/">Introduction</Link>
            </li>
            <li>
              <Link href="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
