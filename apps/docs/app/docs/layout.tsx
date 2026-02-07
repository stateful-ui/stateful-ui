import AppFooter from "@/components/app/AppFooter";
import AppHeader from "@/components/app/AppHeader";
import SectionNavigation from "@/components/docs/SectionNavigation";
import TableOfContents from "@/components/docs/TableOfContents";
import styles from "./layout.module.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.Layout}>
      <AppHeader />
      <div className={`${styles.Page} container`}>
        <SectionNavigation />
        <main className={styles.Main}>
          <article>{children}</article>
        </main>
        <TableOfContents />
      </div>
      <AppFooter />
    </div>
  );
}
