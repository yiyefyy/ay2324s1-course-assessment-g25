import React, { ReactNode } from 'react';
import Link from 'next/link';

interface WhiteboardButtonWrapperProps {
  children: ReactNode;
}

const WhiteboardButtonWrapper = ({ children }: WhiteboardButtonWrapperProps) => {
  return (
    <div className="button-wrapper">
      <Link href="http://localhost:3002">
      {/* <Link href="/collaboration-service/src/app"> */}
          <div className="button">{children}</div>
      </Link>
    </div>
  );
};

export default WhiteboardButtonWrapper;
