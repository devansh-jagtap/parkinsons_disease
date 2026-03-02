import { ModeToggle } from "@/components/theme-mode";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-8 py-4 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-[#18181b]/40 shadow-lg border border-white/30 dark:border-[#23272f]/30 max-w-[90vw] md:max-w-[80vw]">
      <span className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white select-none tracking-tight">
        <Link href="/">Parkinson's Prediction</Link>
      </span>
      
      <div className="flex-1" />
      
      <div className="hidden md:flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="sm">Home</Button>
        </Link>
        <SignedIn>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">Dashboard</Button>
          </Link>
          <Link href="/dashboard/parkinsons-disease">
            <Button variant="ghost" size="sm">Predict</Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default" size="sm">Sign Up</Button>
          </SignUpButton>
        </SignedOut>
      </div>
      
      <ModeToggle />
      
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
