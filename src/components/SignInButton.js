"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-1 ml-auto">
        {/* ================ TODO ============== */}
        {/* When p is hovered, it changes to a Sign-out button */}
        <p className="text-sky-600">
          Welcome <span className="block">{session.user.name}</span>
        </p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button className="text-green-600 ml-auto" onClick={() => signIn("google")}>
      Sign In
    </button>
  );
};

export default SignInButton;
