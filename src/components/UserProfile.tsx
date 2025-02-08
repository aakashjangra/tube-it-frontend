import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut } from "lucide-react";
import clsx from "clsx";
import { logoutUser } from "@/utils/user.api";

export function UserProfile(props) {

  const cName = props.className;
  const [isOpen, setIsOpen] = useState(false);
  const [user, _] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);

  const handleLogout = async () => {
    console.log("Logging out...");
    const res = await logoutUser();
    if (res === null) {
      return;
    }
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={clsx(" h-8 w-8 rounded-full", cName)}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatar} alt={user?.fullname} />
            <AvatarFallback>
              {user?.fullname
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 appearance-none !bg-secondary2">
        <div className="grid gap-4  bg-secondary2">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{user?.fullname}</h4>
            <p className="text-sm text-muted-foreground">@{user?.username}</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="text-sm font-medium">Email</span>
              <span className="col-span-2 text-sm">{user?.email}</span>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
