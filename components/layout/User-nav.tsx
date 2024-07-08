"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import personImg from "@/images/png-transparent-person-logo-symbol-man-black-black-and-white-silhouette.png"
import Link from "next/link";

export default function UserNav() {
    return (
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-6 w-6 shadow-drop2">
            <AvatarImage src={personImg.src} alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Bem-vindo</p>
            <p className="text-xs leading-none text-muted-foreground">
              boas compras!
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link onClick={() => {
            localStorage.clear();
          }} href={"/"}>
            Log out
          </Link>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    );
}