import { Footer, Header } from "../../components/Navigation";

import clsx from "clsx";
import styles from "./Navigation.modules.css";

export function NavigationLayout({
  children,
  className,
  ...props
}) {
  return (
    <div className={clsx(className, styles.layout)} {...props}>
      <Header />
      <main>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}
