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
    return (
      <button onClick={() => signOut()}>
        <a>LOG OUT</a>
      </button>
    );
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
    <nav className="text-black text-xl px-10 pt-2 border outline-dotted">
      <div className="-mb-px flex justify-center">
        <div className="no-underline uppercase tracking-wide font-bold text-xs py-3 mr-8 hover:bg-hover-neonGreen">
          <UserStatus session={session} status={status} />
        </div>
        <button className="no-underline uppercase tracking-wide font-bold text-xs py-3 mr-8 hover:bg-hover-neonGreen">
          <Link href="/home">Home</Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
