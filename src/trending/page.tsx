import Image from "next/image";

export default function Trending() {
  const trendingVideos = [
    {
      id: 1,
      title: "Viral Dance Challenge",
      channel: "Dance Trends",
      views: "5M",
      timeAgo: "2 days",
    },
    {
      id: 2,
      title: "Latest Tech Gadget Review",
      channel: "Tech Explorer",
      views: "2.5M",
      timeAgo: "1 day",
    },
    {
      id: 3,
      title: "Extreme Sports Compilation",
      channel: "Adrenaline Junkies",
      views: "3.8M",
      timeAgo: "3 days",
    },
    {
      id: 4,
      title: "Cooking Masterclass: Gourmet Edition",
      channel: "Chef's Table",
      views: "1.2M",
      timeAgo: "12 hours",
    },
    {
      id: 5,
      title: "Breaking News: Global Event Coverage",
      channel: "World News Network",
      views: "10M",
      timeAgo: "5 hours",
    },
    {
      id: 6,
      title: "DIY Home Renovation Tips",
      channel: "Home Makeover Pro",
      views: "800K",
      timeAgo: "1 week",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trending on Tube-it</h1>
      <div className="space-y-6">
        {trendingVideos.map((video) => (
          <div
            key={video.id}
            className="flex bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/placeholder.svg"
              alt={video.title}
              width={320}
              height={180}
              className="w-80 object-cover"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-muted-foreground mb-2">{video.channel}</p>
              <p className="text-muted-foreground text-sm">
                {video.views} views • {video.timeAgo} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
