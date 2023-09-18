import clsx from "clsx";
import { useMemo } from "react";
import { GitHubIcon } from "../../icons";
import { LinkButton } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import styles from "./Footer.module.css";

export function Footer({
  className,
  ...props
}) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Group 25</span>
        <LinkButton
          href="https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          View on GitHub
        </LinkButton>
      </Container>
    </footer>
  );
}
