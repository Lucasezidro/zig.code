'use client'

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuItem } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ChevronDown, LogOut } from 'lucide-react'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { Menu } from './navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const location = usePathname()

  return (
    <div className="bg-zinc-900 p-8 w-full flex items-center justify-between">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          <span className="text-rose-500">zig</span>.code
        </Link>

        {(location === '/' || location === '/recruters') && (
          <>
            <Separator orientation="vertical" className="h-8" />

            <Input
              placeholder="Busque por nome ou cargo ou status"
              className="bg-zinc-800 w-[23rem]"
            />
          </>
        )}

        <Separator orientation="vertical" className="h-8" />
        <Menu />
      </div>

      <div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium mb-1">Lucas Ezidro</span>
                <span className="text-muted-foreground text-xs">
                  lucasezidro7@gmail.com
                </span>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/Lucasezidro.png" />
                <AvatarFallback>LE</AvatarFallback>
              </Avatar>
              <ChevronDown className="text-muted-foreground size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="/api/auth/sign-out">
                  <LogOut className="mr-2 size-4" />
                  Sign Out
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
