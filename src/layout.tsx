import { Header } from "./components/header";
import { SideNav } from "./components/sideNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <SideNav />
        <section className="bg-primary2 text-tertiary flex-1 p-4">
          {children}
        </section>
      </main>
      <footer className="bg-primary text-tertiary p-4">Footer</footer>
    </div>
  );
};

export default Layout;
