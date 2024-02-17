import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <p>welcome to AI saas platform</p>
      <div className="flex items-center space-x-4 ">
        <Button size="lg" variant="default">
          <Link href="sign-up" className="px-2">
            Register
          </Link>
        </Button>
        <Button size="lg" variant="default">
          <Link href="sign-in" className="px-2">
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
}
