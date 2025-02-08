import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { UserProfile } from "./UserProfile";

export function Header() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("accessToken") !== null &&
      localStorage.getItem("accessToken") !== undefined &&
      localStorage.getItem("accessToken") !== "undefined"
    ) {
      setLoggedIn(true);
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-tertiary backdrop-blur px-5">
      <div className="container flex h-14 items-center">
        <a href="/" className="text-2xl font-bold text-primary mr-6">
          Tube-it
        </a>

        {loggedIn ? (
          <UserProfile className="ml-auto flex items-center space-x-4" />
        ) : (
          <div className="ml-auto flex items-center space-x-4">
            <Button>
              <a href="/login">Login</a>
            </Button>
            <Button>
              <a href="/register">Register</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
