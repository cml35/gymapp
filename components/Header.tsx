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
    return <Link href="/api/auth/signin">LOG IN</Link>;
  };

  const renderStatus = () => {
    return <p>Validating session ...</p>;
  };

  const renderLogout = () => {
    return <button onClick={() => signOut()}>LOGOUT</button>;
  };

  //@ts-ignore
  const UserStatus = (status) => {
    if (status === "loading") {
      return renderStatus();
    }

    if (isLoggedIn) {
      return renderLogout();
    }
    return renderLogin();
  };

  return (
    <nav className="sticky top-0 text-black text-xl p-auto m-auto border border-solid">
      <div className="flex justify-center">
        <button className="no-underline uppercase font-bold text-md p-4 hover:bg-hover-neonGreen">
          <Link href="/home">Home</Link>
        </button>
        <div className="no-underline uppercase font-bold text-md p-4 hover:bg-hover-neonGreen">
          <UserStatus session={session} status={status} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
