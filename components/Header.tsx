// Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session, status } = useSession({ required: true });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, [status]);

  const renderLogin = () => {
    return <Link href="/api/auth/signin">Log in</Link>;
  };

  const renderStatus = () => {
    return <p>Validating session ...</p>;
  };

  const renderLogout = () => {
    return (
      <button onClick={() => signOut()}>
        <a>Log out</a>
      </button>
    );
  };

  //@ts-ignore
  const HeaderBody = (status) => {
    if (status === "loading") {
      return renderStatus();
    }

    if (isLoggedIn) {
      return renderLogout();
    }
    return renderLogin();
  };

  return (
    <nav className="text-white text-lg">
      <HeaderBody session={session} status={status} />
    </nav>
  );
};

export default Header;
