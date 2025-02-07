import clsx from "clsx";
import { Button } from "../components/ui/button";

export const Landing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="min-w-full mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Tube-it
            </h1>
            <p className="text-xl mb-6 text-muted-foreground">
              Discover, share, and enjoy videos like never before.
            </p>
            <Button size="lg">Start Watching</Button>
          </div>
          <div className="md:w-1/2">
            {/* <Image src="/placeholder.svg" alt="Tube-it Hero" width={600} height={400} className="rounded-lg" /> */}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className={clsx("h-full")}
            src="https://media1.tenor.com/m/MDeNXWsyt24AAAAC/credits-to-milkmochabear-milk-and-mocha.gif"
            alt="Tube-it Hero"
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              {/* <Image src="/placeholder.svg" alt={`Featured Video ${i}`} width={400} height={225} className="w-full" /> */}
              <div className="p-4">
                <h3 className="font-semibold mb-2">Featured Video Title {i}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Channel Name
                </p>
                <p className="text-muted-foreground text-xs">
                  1M views • 3 days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
