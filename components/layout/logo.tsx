import { Store } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/products"} className="">
            <Store size={30} color="white" />
        </Link>
    );
}