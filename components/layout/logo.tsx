import { Store } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center justify-center gap-2 text-xl font-extrabold ">
            <Store className="h-10 w-10 " />
        </Link>
    );
}