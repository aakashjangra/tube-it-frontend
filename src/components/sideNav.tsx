export const SideNav = () => {
  return (
    <aside>
      <nav className="flex flex-col pl-5 pt-5 space-y-4 bg-secondary2  h-full w-54">
        <a
          href="/"
          className="text-lg font-medium transition-colors hover:text-primary"
        >
          Home
        </a>
        <a
          href="/trending"
          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Trending
        </a>
        <a
          href="/subscriptions"
          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Subscriptions
        </a>
      </nav>
    </aside>
  );
};
