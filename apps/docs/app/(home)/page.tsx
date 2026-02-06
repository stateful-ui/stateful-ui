import Link from "next/link";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <main className={styles.Page}>
      <h1>Stateful UI</h1>
      <Link href="/docs">Documentation</Link>
    </main>
  );
}
