import clsx from "clsx";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SignInIcon } from "../../icons";
import { Button } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import { Logo } from "../Logo";
import styles from "./Header.module.css";

export function Header({ 
  className, 
  ...props 
}) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/">
          <Logo />
        </Link>
        <Button icon={<SignInIcon />} onClick={() => signIn()}>
          Sign in
        </Button>
      </Container>
    </header>
  );
}
