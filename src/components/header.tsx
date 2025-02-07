import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-tertiary backdrop-blur px-5">
      <div className="container flex h-14 items-center">
        <a href="/" className="text-2xl font-bold text-primary mr-6">
          Tube-it
        </a>

        <div className="ml-auto flex items-center space-x-4">
          <Button>
            <a href="/login">Login</a>
          </Button>
          <Button>
            <a href="/register">Register</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
