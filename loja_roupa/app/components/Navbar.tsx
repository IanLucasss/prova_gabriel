"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-yellow-500 bg-black">

      <div className="text-yellow-500 font-bold text-xl">
        GOLDWEAR
      </div>

      <button
        onClick={() => router.push("/dashboard")}
        className="text-white text-2xl hover:text-yellow-500 transition"
      >
    DASHBOARD
      </button>

      <button
        onClick={() => router.push("/")}
        className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:text-white transition"
      >
        Logout
      </button>

    </nav>
  );
}
