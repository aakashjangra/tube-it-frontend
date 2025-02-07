// import Image from "next/image";
// import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { useEffect } from "react";

export default function Subscriptions() {
  const navigate = useNavigate();

  const subscriptions = [
    { id: 1, name: "Tech Insider", subscribers: "2.5M", videos: 450 },
    { id: 2, name: "Foodie Adventures", subscribers: "1.8M", videos: 320 },
    { id: 3, name: "Fitness Guru", subscribers: "3.2M", videos: 580 },
    { id: 4, name: "Travel Explorers", subscribers: "950K", videos: 210 },
    { id: 5, name: "Gaming Legends", subscribers: "5.1M", videos: 1200 },
    { id: 6, name: "Science Explained", subscribers: "1.5M", videos: 300 },
  ];

  useEffect(() => {
    if (
      !localStorage.getItem("accessToken") ||
      localStorage.getItem("accessToken") === null ||
      localStorage.getItem("accessToken") === undefined ||
      localStorage.getItem("accessToken") === "undefined"
    ) {
      console.log(localStorage.getItem("accessToken"));

      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Subscriptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((sub) => (
          <div
            key={sub.id}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* <Image
                  src="/placeholder.svg"
                  alt={sub.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                /> */}
                <div>
                  <h2 className="text-xl font-semibold">{sub.name}</h2>
                  <p className="text-muted-foreground">
                    {sub.subscribers} subscribers
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{sub.videos} videos</p>
              <Button>View Channel</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
