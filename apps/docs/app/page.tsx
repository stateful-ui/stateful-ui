import Brand from "@/components/brand/Brand";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.Page}>
      <Brand as="h1" size="large" />
      <Link href="/docs">Documentation</Link>
    </main>
  );
}
