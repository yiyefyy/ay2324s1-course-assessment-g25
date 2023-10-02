'use client'

import { SignInIcon } from '@/icons';
import { Button } from '@/primitives/Button';
import { signIn } from "next-auth/react";

export default function SignInButtonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Button icon={<SignInIcon />} onClick={() => signIn()}>
      {children}
    </Button>
  )
}
