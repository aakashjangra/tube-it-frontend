import { Button } from "@/components/ui/button";
import VideoThumbnail from "@/components/VideoThumbnail";
import { Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const _user = JSON.parse(userData);
      console.log(_user);
      setUser(_user);
    }
  }, [])

  return (
    <div>
      <section className="flex items-center p-2 justify-between bg-purple-300">
        {/* user profile  */}
        <Button className="cursor-pointer">User Profile</Button>
        <h1 className="capitalize font-medium">
          Welcome {user ? user?.username : "Guest"}
        </h1>
        {/* video upload  */}
        <Link to="/upload">
          <Button className="cursor-pointer">Upload Video
            <Video/>
          </Button>
        </Link>
      </section>

      <section className="flex justify-around p-2">
        <Link to="/history">
          <Button className="cursor-pointer">History</Button>
        </Link>
        <Link to="/trending">
          <Button className="cursor-pointer">Trending</Button>
        </Link>
        <Link to="/subscriptions">
          <Button className="cursor-pointer">Subscriptions</Button>
        </Link>
      </section>

{/* videos  */}
      <section className="bg-secondary2">
        <VideoThumbnail videoSrc={null} previewImage={null}/>
      </section>
    </div>
  );
};
