"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { EnergyDisplay } from "@/components/energy-display"

export default function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const routes = [
    {
      href: "/",
      label: "首页",
      active: pathname === "/",
    },
    {
      href: "/games",
      label: "游戏库",
      active: pathname === "/games",
    },
    {
      href: "/categories",
      label: "分类",
      active: pathname === "/categories",
    },
    {
      href: "/energy-market",
      label: "能量市场",
      active: pathname === "/energy-market",
    },
    {
      href: "/workshop",
      label: "开发者工坊",
      active: pathname === "/workshop",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => {}}>
                <span className="font-bold text-xl">HEYTCM</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-7 py-2",
                    route.active ? "text-black dark:text-white" : "text-muted-foreground",
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl hidden h-8 sm:inline-block">HEYTCM</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "transition-colors hover:text-primary",
                route.active ? "text-black dark:text-white" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-auto gap-2">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索游戏..." className="w-[200px] lg:w-[300px] pl-8" />
          </div>
          <EnergyDisplay />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {isMounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">切换主题</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">用户</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

