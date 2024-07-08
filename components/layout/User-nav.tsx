"use client"

import Link from "next/link";

export default function UserNav() {
    return (
          <Link onClick={() => {
            localStorage.clear();
          }} href={"/"} className="text-white sans-font no-underline tracking-wider">
            Log out
          </Link>
    );
}