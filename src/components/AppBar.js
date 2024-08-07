"use client";
import Link from "next/link";
import SignInButton from "./SignInButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <SignInButton />
    </header>
  );
};

export default AppBar;
